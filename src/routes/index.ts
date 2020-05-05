import { Router } from 'express';

import appointmentsRouter from './appointments.routes';
import UsersRouter from './_users.routes';
import SessionRouter from './_session.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', UsersRouter);
routes.use('/sessions', SessionRouter);

export default routes;

// methods POST PUT DELETE GET, from ./appointments.routes' will be
// saved here in appointmentsRouter;
