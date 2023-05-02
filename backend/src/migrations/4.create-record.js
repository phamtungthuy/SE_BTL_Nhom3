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
      typing_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      total_score: {
        type: Sequelize.DOUBLE,
        defaultValue: 0
      },
      highest_wpm: {
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
    }).then(() => {
      queryInterface.addConstraint('Records', {
        fields: ['typing_id'],
        type: 'foreign key',
        name: 'typing_record_fk',
        references: {
          table: 'Typings',
          field: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    });

    await queryInterface.bulkInsert('Records', [{
      typing_id: 1,
      total_score: 200,
      highest_wpm: 100,
      time_start: '10:00:00',
      time_finish: '10:10:00'
    }], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Records');
  }
};