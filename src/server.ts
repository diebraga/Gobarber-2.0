import 'reflect-metadata';

import express from 'express';
import routes from './routes';
import multerConfig from './config/multerConfig';


import './database';

const app = express();

app.use(express.json());
app.use('/files', express.static(multerConfig.directory));
app.use(routes);

app.listen(3333, () => {
  console.log('Running 👌');
});
