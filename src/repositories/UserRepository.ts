import { EntityRepository, Repository } from 'typeorm';

import User from '../models/Users';

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  public async findByDate(date: Date): Promise<User | null> {
    const findUser = await this.findOne({
      where: { date },
    });

    return findUser || null;
  }
}


/**
 *  repositories are responsable in manage all data ex: list
 *  delete create update etc..
 *  repository will say how it'd be saved.
 *
 *  EtityRepositorty() brings the model Repository<> types.
 */


// export to your appointments.routes
