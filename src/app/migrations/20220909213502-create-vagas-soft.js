'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('VagasSofts', {
      fk_vagas_vagassoft_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Vagas', key: 'id' }
      },
      fk_softskill_vagassoft_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'SoftSkills', key: 'id' }
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
    await queryInterface.dropTable('VagasSofts');
  }
};