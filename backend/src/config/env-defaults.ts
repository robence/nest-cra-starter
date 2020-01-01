import * as Joi from '@hapi/joi';

export default {
  NODE_ENV: Joi.string().default('development'),
  PORT: Joi.number().default(5000),
  MONGO_URI: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRATION: Joi.number().default(3600000),
};
