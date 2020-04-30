import { EntityRepository, Repository } from 'typeorm';

import Appointment from '../models/Appointment';

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment || null;
  }
}

export default AppointmentsRepository;

/**
 *  repositories are responsable in manage all data ex: list
 *  delete create update etc..
 *  repository will say how it'd be saved.
 *
 *  EtityRepositorty() brings the model Repository<> types.
 */


// export to your appointments.routes
