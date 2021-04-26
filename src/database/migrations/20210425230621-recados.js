'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('recados', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true        
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      text: {
        type: Sequelize.STRING(140),
        allowNull: false,
      },
  
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }, {
      schema: 'testegrow',
      tableName: 'recados'
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('recados', {
      schema: 'testegrow',
      tableName: 'recados'
    });
    
  }
};