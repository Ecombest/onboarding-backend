const sequelize = require("../config/sequelize");
const models = require("../models");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Sync all models to create corresponding tables
    await sequelize.sync();
  },

  down: async (queryInterface, Sequelize) => {
    // Drop all tables
    await queryInterface.dropAllTables();
  },
};
