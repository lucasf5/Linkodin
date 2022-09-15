'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class HabilidadeHards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HabilidadeHards.belongsTo(models.Habilidades,{
        foreignKey: 'fk_habilidade_habilidadehard_id'
      })

      HabilidadeHards.belongsTo(models.HardSkills,{
        foreignKey: 'fk_hardskill_habilidadehard_id'
      })
    }
  }
  HabilidadeHards.init({
    fk_habilidade_habilidadehard_id: {
      type:DataTypes.INTEGER
    },
    fk_hardskill_habilidadehard_id: {
      type: DataTypes.INTEGER
    },
    level: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'HabilidadeHards',
  });
  return HabilidadeHards;
};