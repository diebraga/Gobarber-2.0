import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const UsersRouter = Router();

UsersRouter.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });


    return res.json(user);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
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
