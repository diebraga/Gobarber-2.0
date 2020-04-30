import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('appointments')
class Appointment {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  provider: string;

  @Column('time with time zone')
  date: Date;
}

export default Appointment;

/**
 *  @Entity above the class reppresents that bellow
 *  belongs to your database table.
 *
 *   @* give parametrs to the columns
 *
 *  go to your tsconfig.json and uncomment
 *  "experimentalDecorators": true, && "emitDecoratorMetadata": true,
 *  disable you puting in off your: "strictPropertyInitialization": false,
 */

// this model will be exported to ' /appointments.rutes'
