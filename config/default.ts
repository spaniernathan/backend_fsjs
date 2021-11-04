import { each } from 'lodash';

const envs: {
  [key: string]: string | undefined
} = {};

// eslint-disable-next-line
each(process.env, (value, key) => envs[key] = value);

export default {
  env: envs.ENV,
  port: envs.API_PORT,
  host: envs.API_HOST,
  databaseURL: envs.DATABASE_URL,
  databaseDB: envs.DATABASE_DATABASE,
  databaseUsername: envs.DATABASE_USERNAME,
  databasePassword: envs.DATABASE_PASSWORD,
  databaseHost: envs.DATABASE_HOST,
  databasePort: envs.DATABASE_PORT,
  databaseSchema: envs.DATABASE_SCHEMA,
  jwtPrivateKey: envs.JWT_PRIVATE_KET,
  accessTokenTtl: envs.ACCESS_TOKEN_TTL,
  refreshTokenTtl: envs.REFRESH_TOKEN_TTL,
};
