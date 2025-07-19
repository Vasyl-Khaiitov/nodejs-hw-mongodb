import pino from 'pino-http';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { getEnvVar } from './utils/getEnvVar.js';

import contactRouter from './routers/contacts.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

dotenv.config();

const PORT = Number(getEnvVar('PORT', '3000'));
export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use('/contacts', contactRouter);
  app.use(notFoundHandler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
};
