import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';

import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';

import AppError from '../errors/AppError';

import User from '../models/Users';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

export default class AuthUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { email } });

    if (!user) {
      throw new AppError('Incorrect combination', 401);
    }

    const passwordMarches = await compare(password, user.password);

    if (!passwordMarches) {
      throw new AppError('Incorrect combination', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    // auth completed
    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

/**
 *  your services will store all your code logics
 *  'if's etc...
 *
 *  method compare your password and your crypted password
 */
