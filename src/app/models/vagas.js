'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Vagas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vagas.belongsTo(models.Usuarios,{
        foreignKey: 'fk_usuarios_vag_id'
      })

      Vagas.belongsToMany(models.Usuarios,{
        through: 'UsuarioVaga',
        foreignKey: 'fk_vagas_usuariovaga_id'
      })

      Vagas.belongsToMany(models.HardSkills,{
        through: 'VagasHards',
        foreignKey: 'fk_vagas_vagashard_id'
      })

      Vagas.belongsToMany(models.SoftSkills,{
        through: 'VagasSofts',
        foreignKey: 'fk_vagas_vagassoft_id'
      })
    }
  }
  Vagas.init({
    titulo: DataTypes.STRING,
    tipo_vaga: DataTypes.STRING,
    tipo_contrato: DataTypes.STRING,
    nivel_vaga: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vagas',
    paranoid: true
  });
  return Vagas;
};