'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HabilidadeHards', {
      fk_habilidade_habilidadehard_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Habilidades', key: 'id' }
      },
      fk_hardskill_habilidadehard_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'HardSkills', key: 'id' }
      },
      level: {
        allowNull: true,
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
    await queryInterface.dropTable('HabilidadeHards');
  }
};