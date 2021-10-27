import { Express, Request, Response } from 'express';
import {
  validate, userOwnRoom, userOwnMessage, userIsInRoom,
} from './middlewares';

import {
  getUserSchema, postSessionSchema, deleteSessionSchema, postUserSchema,
  postRoomSchema, deleteRoomSchema, joinRoomSchema, getRoomMessageSchema,
  postRoomMessageSchema, deleteRoomMessageSchema,
} from './schemas';
import {
  createUserSessionHandler, invalidateUserSessionHandler, getUserHandler, postUserHandler,
  getUserSessionsHandler, createRoomHandler, getRoomsHandler, joinRoomHandler,
  deleteRoomHandler, createRoomMessageHandler, getRoomMessagesHandler, deleteRoomMessageHandler,
} from './controllers';

export default (app: Express) => {
  app.get('/api/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

  // Session
  app.get('/api/sessions', [], getUserSessionsHandler);
  app.post('/api/sessions', [validate(postSessionSchema)], createUserSessionHandler);
  app.delete('/api/sessions/:sessionId', [validate(deleteSessionSchema)], invalidateUserSessionHandler);

  // Users
  app.get('/api/users/:userId', [validate(getUserSchema)], getUserHandler);
  app.post('/api/users', [validate(postUserSchema)], postUserHandler);

  // Rooms
  app.get('/api/rooms', [], getRoomsHandler);
  app.post('/api/rooms', [validate(postRoomSchema)], createRoomHandler);
  app.post('/api/rooms/:roomId', [validate(joinRoomSchema)], joinRoomHandler);
  app.delete('/api/rooms/:roomId', [validate(deleteRoomSchema), userOwnRoom], deleteRoomHandler);

  // Messages
  app.get('/api/rooms/:roomId/messages', [validate(getRoomMessageSchema), userIsInRoom], getRoomMessagesHandler);
  app.post('/api/rooms/:roomId/messages', [validate(postRoomMessageSchema), userIsInRoom], createRoomMessageHandler);
  app.delete('/api/rooms/:roomId/messages/:messageId', [validate(deleteRoomMessageSchema), userOwnMessage], deleteRoomMessageHandler);

  app.all('/*', (req: Request, res: Response) => res.sendStatus(404));
};
