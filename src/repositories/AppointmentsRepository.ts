import { isEqual } from 'date-fns';
// defining 'types' from '../models' of values in the vars down bellow
import Appointment from '../models/Appointment';

// private the var isn't accecible out of the class;
// 'type' defined;
class AppointmentsRepository {
  private appointments: Appointment[];

  // init the var ;
  constructor() {
    this.appointments = [];
  }
// function returns all appointments
  public all(): Appointment[] {
    return this.appointments;
  }

// make var public order to be used on appointments.routes
  public findByDate(date: Date): Appointment | null {
      // this var saves finds appointments returns True, otherwise 'null'
  const findAppointment = this.appointments.find(appointment =>
    isEqual(date, appointment.date),
  );
    return findAppointment || null;
  }

  // 'public' can be used out the class;
  // declared 'types' down bellow;
  public create(provider: string, date: Date,): Appointment {
    const appointment = new Appointment(provider, date);

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;

/**
 *  repositories are responsable in manage all data ex: list
 *  delete create update etc..
 *  repository will say how it'd be saved.
 */


// export to your appointments.routes
