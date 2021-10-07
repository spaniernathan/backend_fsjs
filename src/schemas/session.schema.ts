import expressJoi from 'express-joi';

const getSessionSchema = {
  params: expressJoi.Joi.object({
    uuid: expressJoi.Joi.string().required(),
  }),
};

const postSessionSchema = expressJoi.Joi.object({
  body: expressJoi.Joi.object({
    email: expressJoi.Joi.string().email().required(),
    password: expressJoi.Joi.string().required(),
  }),
});

const deleteSessionSchema = expressJoi.Joi.object({
  params: expressJoi.Joi.object({
    uuid: expressJoi.Joi.string().required(),
  }),
});

export { getSessionSchema, postSessionSchema, deleteSessionSchema };
