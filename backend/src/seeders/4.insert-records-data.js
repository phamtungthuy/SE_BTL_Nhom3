'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Records', [{
      typing_id: 1,
      total_score: 200,
      highest_wpm: 100,
      time_start: '10:00:00',
      time_finish: '10:10:00'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Records', null, {});
  }
};
