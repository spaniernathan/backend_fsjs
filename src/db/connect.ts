import { Sequelize } from 'sequelize';
import config from '../config';

const sequelize = new Sequelize(config.nodeEnv === 'production' ? config.databaseURL : {
  dialect: 'postgres',
  database: config.databaseDB,
  username: config.databaseUsername,
  password: config.databasePassword,
  host: config.databaseHost,
  port: config.databasePort,
});

export default sequelize;
