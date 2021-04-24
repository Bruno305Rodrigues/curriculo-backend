'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('contatos', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true        
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(100),
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
      tableName: 'contatos'
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('contatos', {
      schema: 'testegrow',
      tableName: 'contatos'
    });
    
  }
};

