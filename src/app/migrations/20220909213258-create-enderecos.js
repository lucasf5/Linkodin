'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Enderecos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      logradouro: {
        type: Sequelize.STRING(11)
      },
      nome_logradouro: {
        type: Sequelize.STRING(50)
      },
      numero_logradouro: {
        type: Sequelize.STRING(7)
      },
      complemento: {
        type: Sequelize.STRING(25)
      },
      bairro: {
        type: Sequelize.STRING(50)
      },
      cidade: {
        type: Sequelize.STRING(29)
      },
      estado: {
        type: Sequelize.STRING(2)
      },
      fk_infopessoais_end_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'InfoPessoais', key: 'id' },
        onDelete: 'CASCADE'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Enderecos');
  }
};