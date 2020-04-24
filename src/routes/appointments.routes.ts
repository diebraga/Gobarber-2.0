import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';
// defining 'types' from '../models' of values in the vars down bellow
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
// var saves all types declared of function needed to create appointments.
const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

// attribuating interface declared above from 'models' 'Appointment[]'
// temporary var save appointments
// const appointments: Appointment[] = []

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
