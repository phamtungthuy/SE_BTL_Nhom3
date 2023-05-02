'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Typings', [{
      user_id: 1,
      paragraph_id: 1,
      score: 80.5,
      wpm: 60.2,
      accuracy: 90.0
  }, {
    user_id: 2,
      paragraph_id: 2,
      score: 95,
      wpm: 70,
      accuracy: 98.0
  }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Typings', null, {});
  }
};
