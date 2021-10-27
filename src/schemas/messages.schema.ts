import expressJoi from 'express-joi';

const getRoomMessageSchema = expressJoi.Joi.object({
  params: expressJoi.Joi.object({
    roomId: expressJoi.Joi.string().required(),
  }),
});

const postRoomMessageSchema = expressJoi.Joi.object({
  params: expressJoi.Joi.object({
    roomId: expressJoi.Joi.string().required(),
  }),
  body: expressJoi.Joi.object({
    value: expressJoi.Joi.string().required(),
  }),
});

const deleteRoomMessageSchema = expressJoi.Joi.object({
  params: expressJoi.Joi.object({
    roomId: expressJoi.Joi.string().required(),
    messageId: expressJoi.Joi.string().required(),
  }),
});

export { postRoomMessageSchema, deleteRoomMessageSchema, getRoomMessageSchema };
