'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Records', [], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Records', null, {});
  }
};
