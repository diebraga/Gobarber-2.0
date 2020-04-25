import { startOfHour } from 'date-fns';

import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface Request {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  private appointmentsRepository: AppointmentsRepository;

  constructor(appointmentRepository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentRepository;
  }


  public execute({ date, provider }: Request ): Appointment {
    const appointmentDate = startOfHour(date);

    const findAppointmentSameDate = this.appointmentsRepository.findByDate(date);

      if (findAppointmentSameDate) {
        throw Error('Already booked');
      }

      const appointment = this.appointmentsRepository.create({
        provider,
        date: appointmentDate,
      });

      return appointment;
  }
}

export default CreateAppointmentService;

