import { env } from 'process';

export default {
  env: env.ENV,
  port: env.API_PORT,
  host: env.API_HOST,
  databaseDB: env.DATABASE_DATABASE,
  databaseUsername: env.DATABASE_USERNAME,
  databasePassword: env.DATABASE_PASSWORD,
  databaseHost: env.DATABASE_HOST,
  databasePort: env.DATABASE_PORT,
  databaseSchema: env.DATABASE_SCHEMA,
  jwtPrivateKey: env.JWT_PRIVATE_KET,
  accessTokenTtl: env.ACCESS_TOKEN_TTL,
  refreshTokenTtl: env.REFRESH_TOKEN_TTL,
};
