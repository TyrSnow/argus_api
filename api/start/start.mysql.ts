import * as Sequelize from 'sequelize';

const sequelize = new Sequelize('argus', 'argus', 'Argus@2018', {
  host: '127.0.0.1',
  dialect: 'mysql',
  insecureAuth: true,
  pool: {
    max: 10,
    min: 1,
    acquire: 30000,
    idle: 10000,
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;
