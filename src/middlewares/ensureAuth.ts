import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import AppError from '../errors/AppError';

import authConfig from '../config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuth(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
// jwt validation

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Jwt missing', 401);
  }

  const [type, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub } = decoded as TokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch (err) {
    throw new AppError('Invalid Token', 401);
  }
}

/**
 *
 *   Apply thist middleware where you want
 *  only authenticated users.
 */
