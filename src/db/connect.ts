import config from 'config';
import { Sequelize } from 'sequelize';
import logger from '../logger';

const sequelize = new Sequelize({
  dialect: 'postgres',
  database: config.get('databaseDB'),
  username: config.get('databaseUsername'),
  password: config.get('databasePassword'),
  host: config.get('databaseHost'),
  port: config.get('databasePort'),
});

/* try {
  sequelize.createSchema(config.get('databaseSchema'), config.get('env') === 'developement' ? { logging: true, benchmark: true } : {});
} catch (e) {
  logger.info('Error: ', e);
} */

export default sequelize;
