import * as Joi from 'joi';

const getUserSchemaParams = Joi.object({
  uuid: Joi.string().required(),
});

const postUserSchemaBody = Joi.object({
  displayName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).required(),
});

export { getUserSchemaParams, postUserSchemaBody };
