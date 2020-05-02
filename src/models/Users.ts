import {
  Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';

@Entity('users')
class Users {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Users;

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
