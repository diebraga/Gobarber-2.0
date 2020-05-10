import { Router, request } from 'express';
import multer from 'multer';
import multerConfig from '../config/multerConfig';

import CreateUserService from '../services/CreateUserService';
import ensureAuth from '../middlewares/ensureAuth';
import UserAvatarService from '../services/UpdateUserAvatarService';

const UsersRouter = Router();
const upload = multer(multerConfig);

UsersRouter.get('/', async (req, res) => res.json());


UsersRouter.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    email,
    password,
  });


  return res.json(user);
});

UsersRouter.patch('/avatar', ensureAuth, upload.single('avatar'),
  async (req, res) => {
    const updateUserAvatar = new UserAvatarService();

    const user = await updateUserAvatar.execute({
      user_id: req.user.id,
      avatarFilename: req.file.filename,
    });

    delete user.password;

    return res.json(user);
  });

export default UsersRouter;

/**
 *  Route will be responsable transform data, request
 *  from services, repo and response only.
 */
/**
 *  Routes are responsable recieve req, call data and give res only';
 *  how data has to be saved
 */
