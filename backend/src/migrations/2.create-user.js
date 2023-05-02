'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: true
      },
      gender: {
          type: Sequelize.BOOLEAN,
          defaultValue: true
      }
    });

    await queryInterface.bulkInsert('Users', [{
      email: 'admin@admin.com',
      name: 'admin',
      password: 'password',
      address: 'Viet Nam',
      phoneNumber: 'xxxxxxxxxxxx',
      gender: false
    }, {
      email: 'user@user.com',
      name: 'user',
      password: 'password',
      address: 'Viet Nam',
      phoneNumber: 'xxxxxxxxxxxx',
      gender: true
    }], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};