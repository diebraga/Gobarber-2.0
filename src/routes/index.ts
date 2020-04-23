import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();
// methods POST PUT DELETE GET, from ./appointments.routes' will be
// saved here in appointmentsRouter;
routes.use('/appointments', appointmentsRouter);

export default routes;
