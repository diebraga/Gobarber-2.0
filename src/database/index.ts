import { createConnection } from 'typeorm';

createConnection();

/**
 *  the function will call 'ormconfig.json' and import the data
 * needed to conect typeorm to the database;
 *
 *  export to server.ts
 */
