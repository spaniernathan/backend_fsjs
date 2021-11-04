import expressJoi from 'express-joi';

const postRoomSchema = expressJoi.Joi.object({
  body: expressJoi.Joi.object({
    roomName: expressJoi.Joi.string().required(),
  }),
});

const deleteRoomSchema = expressJoi.Joi.object({
  params: expressJoi.Joi.object({
    roomId: expressJoi.Joi.string().required(),
  }),
});

const joinRoomSchema = expressJoi.Joi.object({
  params: expressJoi.Joi.object({
    roomId: expressJoi.Joi.string().required(),
  }),
});

export { postRoomSchema, deleteRoomSchema, joinRoomSchema };
