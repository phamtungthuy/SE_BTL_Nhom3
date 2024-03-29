'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Typings', {
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
      score: {
        type: Sequelize.DOUBLE,
        defaultValue: 0
      },
      wpm: {
        type: Sequelize.DOUBLE,
        defaultValue: 0
      },
      accuracy: {
        type: Sequelize.DOUBLE,
        defaultValue: 0
      }
    })
    .then(() => {
      queryInterface.addConstraint('Typings', {
        fields: ['paragraph_id'],
        type: 'foreign key',
        name: 'paragraph_typing_fk',
        references: {
          table: 'Paragraphs',
          field: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }).then(() => {
      queryInterface.addConstraint('Typings', {
        fields: ['user_id'],
        type: 'foreign key',
        name: 'user_typing_fk',
        references: {
          table: 'Users',
          field: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    });
    
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Typings');
  }
};