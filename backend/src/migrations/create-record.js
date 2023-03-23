'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Records', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      paragraph_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      typing_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      total_score: {
        type: Sequelize.DOUBLE,
        defaultValue: 0
      },
      time_start: {
        type: Sequelize.TIME,
        allowNull: true
      },
      time_finish: {
        type: Sequelize.TIME,
        allowNull: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Records');
  }
};