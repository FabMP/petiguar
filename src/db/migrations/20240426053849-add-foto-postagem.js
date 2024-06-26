'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('Postagens', 'foto', {
      type: Sequelize.STRING
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Postagens', 'foto')
  }
};