import { Router } from 'express';
import { uuid } from 'uuidv4';
import { startOfHour, parseISO, isEqual } from 'date-fns';

const appointmentsRouter = Router();

// defining 'types' of values in the vars down bellow
interface Appointment {
  id: string;
  provider: string;
  date: Date;
}
// attribuating interface declared above 'Appointment[]'
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

  const appointment = {
    id: uuid(),
    provider,
    date: formatedDate,
  }

  appointments.push(appointment);

  return res.json(appointment)
})

export default appointmentsRouter;
