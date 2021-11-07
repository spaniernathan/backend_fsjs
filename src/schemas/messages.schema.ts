import * as Joi from 'joi';

const getRoomMessageSchemaParams = Joi.object({
  roomId: Joi.string().required(),
});

const deleteRoomMessageSchemaParams = Joi.object({
  roomId: Joi.string().required(),
  messageId: Joi.string().required(),
});

export {
  getRoomMessageSchemaParams, deleteRoomMessageSchemaParams,
};
