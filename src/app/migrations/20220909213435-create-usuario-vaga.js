'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UsuarioVagas', {
      fk_usuarios_usuariovaga_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Usuarios', key: 'id' }
      },
      fk_vagas_usuariovaga_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Vagas', key: 'id' }
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
    await queryInterface.dropTable('UsuarioVagas');
  }
};