'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UsuarioVaga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UsuarioVaga.belongsTo(models.Usuarios,{
        foreignKey: 'fk_usuarios_usuariovaga_id'
      })

      UsuarioVaga.belongsTo(models.Vagas,{
        foreignKey: 'fk_vagas_usuariovaga_id'
      })
    }
  }
  UsuarioVaga.init({
    fk_usuarios_usuariovaga_id: DataTypes.INTEGER,
    fk_vagas_usuariovaga_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UsuarioVaga'
  });
  return UsuarioVaga;
};