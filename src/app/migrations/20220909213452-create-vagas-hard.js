'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('VagasHards', {
      fk_vagas_vagashard_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Vagas', key: 'id' }
      },
      fk_hardskill_vagashard_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'HardSkills', key: 'id' }
      },
      nivel_desejado:{
        allowNull: false,
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
    await queryInterface.dropTable('VagasHards');
  }
};