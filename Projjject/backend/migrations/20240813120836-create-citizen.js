'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Citizens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NationalID: {
        type: Sequelize.STRING
      },
      Name: {
        type: Sequelize.STRING
      },
      Address: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      didVoteLocal: {
        type: Sequelize.BOOLEAN
      },
      didVoteParty: {
        type: Sequelize.BOOLEAN
      },
      district: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Citizens');
  }
};