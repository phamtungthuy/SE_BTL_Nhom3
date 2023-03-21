import Sequelize from 'sequelize';
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_NAME, 'root', process.env.DATABASE_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: process.env.DATABASE_PORT
  });

  let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }

module.exports = connectDB;