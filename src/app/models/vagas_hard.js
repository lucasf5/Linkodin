'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class VagasHards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      VagasHards.belongsTo(models.Vagas,{
        foreignKey: 'fk_vagas_vagashard_id'
      })

      VagasHards.belongsTo(models.HardSkills,{
        foreignKey: 'fk_hardskill_vagashard_id'
      })
    }
  }
  VagasHards.init({
    nivel_desejado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'VagasHards',
  });
  return VagasHards;
};