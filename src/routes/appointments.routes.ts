import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.get('/', (req, res) => {
  const appointments = appointmentsRepository.all();

  return res.json(appointmentsRepository);
})

appointmentsRouter.post('/', (req, res) => {
  const { provider, date } = req.body;

// date will be formated to the begining of hour ex: 13:00 in this var
// date will be coerted in New Date() in this var
  const formatedDate = startOfHour(parseISO(date));

  const findAppointmentSameDate = appointmentsRepository.findByDate(formatedDate);

    if (findAppointmentSameDate) {
      return res
      .status(400)
      .json({ message: 'Already booked' });
    }

    const appointment = appointmentsRepository.create(provider, formatedDate);

  return res.json(appointment)
})

export default appointmentsRouter;
