import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';
// defining 'types' from '../models' of values in the vars down bellow
import Appointment from '../models/Appointment';

const appointmentsRouter = Router();

// attribuating interface declared above from 'models' 'Appointment[]'
const appointments: Appointment[] = []

appointmentsRouter.post('/', (req, res) => {
  const { provider, date } = req.body;
// date will be formated to the begining of hour ex: 13:00 in this var
// date will be coerted in New Date() in this var
  const formatedDate = startOfHour(parseISO(date))
  // this var saves equal appointments returns True, otherwise 'False'
  const findAppointmentSameDate = appointments.find(appointment =>
      isEqual(formatedDate, appointment.date),
    );

    if (findAppointmentSameDate) {
      return res
      .status(400)
      .json({ message: 'Already booked' });
    }

  const appointment = new Appointment(provider, formatedDate);

  appointments.push(appointment);

  return res.json(appointment)
})

export default appointmentsRouter;
