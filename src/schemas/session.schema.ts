import * as Joi from 'joi';

const getSessionSchemaParams = Joi.object({
  uuid: Joi.string().required(),
});

const postSessionSchemaBody = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const deleteSessionSchemaParams = Joi.object({
  uuid: Joi.string().required(),
});

export { getSessionSchemaParams, postSessionSchemaBody, deleteSessionSchemaParams };
