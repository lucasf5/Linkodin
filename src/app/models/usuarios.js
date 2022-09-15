'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuarios.hasOne(models.InfoPessoais,{
        foreignKey: 'fk_usuarios_info_id',
        onDelete: 'CASCADE'
      })

      Usuarios.hasOne(models.Habilidades,{
        foreignKey: 'fk_usuarios_hab_id',
        onDelete: 'CASCADE'
      });

      Usuarios.hasMany(models.Vagas,{
        foreignKey: 'fk_usuarios_vag_id'
      })

      Usuarios.belongsToMany(models.Vagas,{
        through: 'UsuarioVaga',
        foreignKey: 'fk_usuarios_usuariovaga_id'
      })
    }
  }
  Usuarios.init({
    nome_usuario: DataTypes.STRING,
    senha: DataTypes.STRING,
    usuario_tipo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuarios',
    paranoid: true
  });
  return Usuarios;
};