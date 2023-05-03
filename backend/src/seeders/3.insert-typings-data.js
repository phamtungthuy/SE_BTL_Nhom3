'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Typings', [])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Typings', null, {});
  }
};
