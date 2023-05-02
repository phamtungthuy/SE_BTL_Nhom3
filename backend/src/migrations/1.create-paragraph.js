'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Paragraphs', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      difficulty: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      language: {
        type: Sequelize.STRING,
        defaultValue: 'English',
        allowNull: false
      },
      is_test: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      }
    });


  
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Paragraphs');
  }
};