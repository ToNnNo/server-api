'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Produits', [{
      name: 'Pomme',
      price: 12.99,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Cerise',
      price: 0.99,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Poire',
      price: 7.5,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Produits', null, {});
  }
};
