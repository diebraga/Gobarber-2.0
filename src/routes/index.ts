import { Router } from 'express';

import appointmentsRouter from './appointments.routes';
import UsersRouter from './users.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', UsersRouter);


export default routes;

// methods POST PUT DELETE GET, from ./appointments.routes' will be
// saved here in appointmentsRouter;
