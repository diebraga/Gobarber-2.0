import { uuid } from 'uuidv4';

class Appointment {
  id: string;

  provider: string;

  date: Date;
  // id will be always a {uuid} 'unique universal id'
// declaring value types
  constructor(provider: string, date: Date,) {
    this.id = uuid();
    this.provider = provider;
    this.date = date;
  }
}

export default Appointment;

// this model will be exported to ' /appointments.rutes'
