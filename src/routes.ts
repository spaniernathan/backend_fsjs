import {
  Express, NextFunction, Request, Response,
} from 'express';
import { StatusCodes } from 'http-status-codes';
import { createValidator } from 'express-joi-validation';
import {
  userOwnRoom, userIsInRoom, userAuthenticated,
} from './middlewares';
import {
  postUserSchemaBody,
  postSessionSchemaBody,
  deleteSessionSchemaParams,
  postRoomSchemaBody,
  deleteRoomSchemaParams,
  joinRoomSchemaParams,
  getRoomMessageSchemaParams,
} from './schemas';

import {
  createUserSessionHandler, invalidateUserSessionHandler, getUserHandler, postUserHandler,
  getUserSessionsHandler, createRoomHandler, getRoomsHandler, joinRoomHandler,
  deleteRoomHandler, getRoomMessagesHandler,
} from './controllers';

const validator = createValidator({
  passError: true,
});

export default (app: Express) => {
  app.get('/api/healthcheck', (req: Request, res: Response) => res.sendStatus(StatusCodes.OK));

  // Session
  app.get('/api/sessions', [userAuthenticated], getUserSessionsHandler);
  app.post('/api/sessions', [validator.body(postSessionSchemaBody)], createUserSessionHandler);
  app.delete('/api/sessions/:sessionId', [userAuthenticated, validator.params(deleteSessionSchemaParams)], invalidateUserSessionHandler);

  // Users
  app.get('/api/users', [userAuthenticated], getUserHandler);
  app.post('/api/users', [validator.body(postUserSchemaBody)], postUserHandler);

  // Rooms
  app.get('/api/rooms', [userAuthenticated], getRoomsHandler);
  app.post('/api/rooms', [userAuthenticated, validator.body(postRoomSchemaBody)], createRoomHandler);
  app.post('/api/rooms/:roomId', [userAuthenticated, validator.params(joinRoomSchemaParams)], joinRoomHandler);
  app.delete('/api/rooms/:roomId', [userAuthenticated, validator.params(deleteRoomSchemaParams), userOwnRoom], deleteRoomHandler);

  // Messages
  app.get('/api/rooms/:roomId/messages', [userAuthenticated, validator.params(getRoomMessageSchemaParams), userIsInRoom], getRoomMessagesHandler); // BONUS

  app.all('/*', (req: Request, res: Response) => res.sendStatus(StatusCodes.NOT_FOUND));

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (err && err.error && err.error.isJoi) {
      res.sendStatus(400);
    } else {
      next(err);
    }
  });
};
