'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users',
      [
        {
          nome: 'John',
          email: 'john@example.com',
          descricao: 'John blá blá blá',
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          nome: 'Fabiana',
          email: 'fabiana@example.com',
          descricao: 'Fabiana blá blá blá',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Fernanda',
          email: 'fernanda@example.com',
          descricao: 'Fernanda blá blá blá',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    );

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
