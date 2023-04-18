'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = 'Spots'

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert(options, [
      {
        ownerId: 1,
        address: '20 W 34th St.',
        city: 'New York',
        state: 'NY',
        country: 'USA',
        lat: 40.7484,
        lng: 73.9857,
        name: 'Empire State Building',
        description: 'Very tall.',
        price: 1500
      },
      {
        ownerId: 2,
        address: '12 Grimmauld Place',
        city: 'London',
        country: 'England',
        lat: 24.6782,
        lng: 30.2148,
        name: 'Grimmauld Place',
        description: 'Located in the heart of London.',
        price: 160
      },
      {
        ownerId: 3,
        address: '5000 Middle of Nowhere Ave',
        city: 'Forks',
        state: 'WA',
        country: 'USA',
        lat: 20.3547,
        lng: 65.4895,
        name: "The Cullen's Mansion",
        description: 'Glass box in the woods.',
        price: 250
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(options)
  }
};