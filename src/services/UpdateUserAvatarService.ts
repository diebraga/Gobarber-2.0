import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';

import multerConfig from '../config/multerConfig';
import User from '../models/Users';

interface Request {
  user_id: string,
  avatarFilename: string,
}

export default class UpdateUserAvatarService {
  public async execute({ user_id, avatarFilename }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);

    if (!user) {
      throw new Error('Authenticated users only!');
    }

    if (user.avatar) {
      // delete avatar

      const userAvatarFilePath = path.join(multerConfig.directory, user.avatar);
      const userAvatarFileExist = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExist) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = avatarFilename;

    await usersRepository.save(user);

    return user;
  }
}

/**
 *  your services will store all your code logics
 *  'if's etc...
 */
