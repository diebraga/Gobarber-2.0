import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

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
    throw new Error('Jwt missing');
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
    throw new Error('Invalid Token');
  }
}

/**
 *
 *   Apply thist middleware where you want
 *  only authenticated users.
 */
