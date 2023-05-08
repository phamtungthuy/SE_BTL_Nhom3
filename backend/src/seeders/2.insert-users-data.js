'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@admin.com',
      name: 'admin',
      isAdmin: true,
      password: 'password',
      address: 'Viet Nam',
      phoneNumber: 'xxxxxxxxxxxx',
      gender: false
    }, {
      email: 'user@user.com',
      name: 'user',
      isAdmin: false,
      password: 'password',
      address: 'Viet Nam',
      phoneNumber: 'xxxxxxxxxxxx',
      gender: true
    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
