import expressJoi from 'express-joi';

const getUserSchema = {
  params: expressJoi.Joi.object({
    uuid: expressJoi.Joi.string().required(),
  }),
};

const postUserSchema = {
  body: expressJoi.Joi.object({
    displayName: expressJoi.Joi.string().required(),
    email: expressJoi.Joi.string().email().required(),
    password: expressJoi.Joi.string().min(3).required(),
  }),
};

export { getUserSchema, postUserSchema };
