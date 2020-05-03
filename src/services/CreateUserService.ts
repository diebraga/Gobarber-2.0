import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../models/Users';

interface Request {
  name: string;
  email: string;
  password: string;
}

export default class CreateUserServicer {
  public async execute({ name, email, password }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const userExists = await usersRepository.findOne({
      where: { email },
    });

    if (userExists) {
      throw new Error('Email address already being used');
    }

    const PasswordHash = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: PasswordHash,
    });

    await usersRepository.save(user);

    return user;
  }
}
