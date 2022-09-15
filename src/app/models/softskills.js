'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SoftSkills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SoftSkills.belongsToMany(models.Habilidades, {
        through: 'HabilidadeSoft',
        foreignKey: 'fk_softskill_habilidadesoft_id'
      })
      SoftSkills.belongsToMany(models.Vagas,{
        through: 'VagasSofts',
        foreignKey: 'fk_softskill_vagassoft_id'
      })
    }
  }
  SoftSkills.init({
    nome_softskill: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SoftSkills',
  });
  return SoftSkills;
};