const Sequelize = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize({
  database: 'dbJS',
  username: 'userJS',
  password: 'pwdJS',
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
});

async function asyncCall() {
  console.log('etner');
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

asyncCall();

export {
  sequelize,
  Sequelize,
};
