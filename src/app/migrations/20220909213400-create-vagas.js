'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vagas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING(50)
      },
      tipo_vaga: {
        type: Sequelize.STRING(10)
      },
      tipo_contrato: {
        type: Sequelize.STRING(7)
      },
      nivel_vaga: {
        type: Sequelize.STRING(6)
      },
      descricao: {
        type: Sequelize.TEXT
      },
      fk_usuarios_vag_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Usuarios', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Vagas');
  }
};