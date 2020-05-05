import { Router } from 'express';

import AuthUserService from '../services/AuthUserService';

const SessionRouter = Router();

SessionRouter.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    const AuthUser = new AuthUserService();

    const { user } = await AuthUser.execute({
      email,
      password,
    });

    delete user.password;

    return res.json({ user });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default SessionRouter;

/**
 *  Route will be responsable transform data, request
 *  from services, repo and response only.
 */
/**
 *  Routes are responsable recieve req, call data and give res only';
 *  how data has to be saved
 */
