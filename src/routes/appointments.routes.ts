import { Router } from 'express';
import { parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentServices';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.get('/', (req, res) => {
  const appointments = appointmentsRepository.all();

  return res.json(appointmentsRepository);
});

appointmentsRouter.post('/', (req, res) => {
  try {
    const { provider, date } = req.body;

    // date will be formated to the begining of hour ex: 13:00 in this var
    // date will be coerted in New Date() in this var
    const formatedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService(appointmentsRepository);

    const appointment = createAppointment.execute({ date: formatedDate, provider });

    return res.json(appointment);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default appointmentsRouter;

/**
 *  Route will be responsable transform data, request
 *  from services, repo and response only.
 */
/**
 *  Routes are responsable recieve req, call data and give res only';
 *  how data has to be saved
 */
