import express from 'express';
import Sequelize from 'sequelize';
require('dotenv').config();


const sequelize = new Sequelize(process.env.DATABASE_NAME, 'root', process.env.DATABASE_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  port: process.env.DATABASE_PORT
});




let conFigViewEngine = async (app) => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs");
    app.set("views", "./src/views");
}

module.exports = conFigViewEngine;