import { Router, request } from 'express';

import { sub } from 'date-fns';
import CreateUserService from '../services/CreateUserService';

const UsersRouter = Router();

UsersRouter.get('/', async (req, res) => res.json());


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
