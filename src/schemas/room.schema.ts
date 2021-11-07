import * as Joi from 'joi';

const postRoomSchemaBody = Joi.object({
  roomName: Joi.string().required(),
});

const deleteRoomSchemaParams = Joi.object({
  roomId: Joi.string().required(),
});

const joinRoomSchemaParams = Joi.object({
  roomId: Joi.string().required(),
});

export { postRoomSchemaBody, deleteRoomSchemaParams, joinRoomSchemaParams };
