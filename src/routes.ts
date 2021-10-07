import { Express, Request, Response } from 'express';
import { validate } from './middlewares';

import {
  getUserSchema, postSessionSchema, deleteSessionSchema, postUserSchema,
} from './schemas';
import {
  createUserSessionHandler, invalidateUserSessionHandler, getUserHandler, postUserHandler,
} from './controllers';

export default (app: Express) => {
  app.get('/api/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

  // Session
  app.post('/api/sessions', [validate(postSessionSchema)], createUserSessionHandler);
  app.delete('/api/sessions', [validate(deleteSessionSchema)], invalidateUserSessionHandler);

  // Users
  app.get('/api/users/:userId', [validate(getUserSchema)], getUserHandler);
  app.post('/api/users', [validate(postUserSchema)], postUserHandler);

  app.all('/*', (req: Request, res: Response) => res.sendStatus(404));
};
