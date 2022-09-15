'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class HardSkills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HardSkills.belongsToMany(models.Habilidades, {
        through: 'HabilidadeHards',
        foreignKey: 'fk_hardskill_habilidadehard_id'
      })
      HardSkills.belongsToMany(models.Vagas,{
        through: 'VagasHards',
        foreignKey: 'fk_hardskill_vagashard_id'
      })
    }
  }
  HardSkills.init({
    nome_hardskill: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'HardSkills',
  });
  return HardSkills;
};