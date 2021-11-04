import config from 'config';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(config.get('env') === 'production' ? config.get('databaseURL') : {
  dialect: 'postgres',
  database: config.get('databaseDB'),
  username: config.get('databaseUsername'),
  password: config.get('databasePassword'),
  host: config.get('databaseHost'),
  port: config.get('databasePort'),
});

export default sequelize;
