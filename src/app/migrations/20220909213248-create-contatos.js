'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Contatos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      telefone_fixo: {
        type: Sequelize.STRING(10)
      },
      telefone_celular: {
        type: Sequelize.STRING(11)
      },
      fk_infopessoais_cont_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'InfoPessoais', key: 'id' },
        onDelete: 'CASCADE'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Contatos');
  }
};