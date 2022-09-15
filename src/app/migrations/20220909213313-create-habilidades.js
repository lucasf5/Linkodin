'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Habilidades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      area: {
        type: Sequelize.STRING
      },
      senioridade: {
        type: Sequelize.STRING
      },
      fk_usuarios_hab_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Usuarios', key: 'id' }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Habilidades');
  }
};