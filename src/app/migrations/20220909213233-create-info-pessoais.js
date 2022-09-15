'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('InfoPessoais', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cpf_cnpj: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING(14)
      },
      data_nasc: {
        type: Sequelize.DATEONLY
      },
      nome_completo: {
        type: Sequelize.STRING(50)
      },
      sobre: {
        defaultValue: true,
        type: Sequelize.TEXT
      },
      fk_usuarios_info_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Usuarios', key: 'id' },
        onDelete: 'CASCADE'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('InfoPessoais');
  }
};