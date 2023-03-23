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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Records');
  }
};