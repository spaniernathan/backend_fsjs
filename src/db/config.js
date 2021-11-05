const baseConfig = {
  schema: process.env.DATABASE_SCHEMA,
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
    },
  },
  development: {
    ...baseConfig,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_DB,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  },
};
