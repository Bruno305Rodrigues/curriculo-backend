'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createSchema('testegrow');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropSchema('testegrow');
  }
};
