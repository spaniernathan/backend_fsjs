import * as dotenv from 'dotenv';
import { each } from 'lodash';

let envs = {};

const result = dotenv.config();

if (!('error' in result)) {
  envs = result.parsed;
} else {
  // eslint-disable-next-line
  each(process.env, (value, key) => envs[key] = value);
}

const baseConfig = {
  schema: envs.DATABASE_SCHEMA,
  // eslint-disable-next-line no-console
  logging: console.log,
  maxConcurrentQueries: 10,
  dialect: 'postgres',
  pool: { maxConnections: 5, maxIdleTime: 30 },
  language: 'en',
  dialectOptions: {
    connectTimeout: 3000,
  },
};

module.exports = {
  production: {
    ...baseConfig,
    use_env_variable: 'DATABASE_URL',
    schema: 'ht_prod',
    logging: false,
    maxConcurrentQueries: 100,
    pool: { maxConnections: 10, maxIdleTime: 30 },
    dialectOptions: {
      connectTimeout: 3000,
      ssl: true,
    },
  },
  development: {
    ...baseConfig,
    host: envs.DATABASE_HOST,
    port: envs.DATABASE_PORT,
    database: envs.DATABASE_DB,
    username: envs.DATABASE_USERNAME,
    password: envs.DATABASE_PASSWORD,
  },
};
