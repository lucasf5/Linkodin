'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HabilidadeSoft', {
      fk_habilidade_habilidadesoft_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Habilidades', key: 'id' }
      },
      fk_softskill_habilidadesoft_id: {
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
    await queryInterface.dropTable('HabilidadeSoft');
  }
};