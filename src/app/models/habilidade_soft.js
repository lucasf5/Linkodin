'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class HabilidadeSoft extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HabilidadeSoft.belongsTo(models.Habilidades, {
        foreignKey: 'fk_habilidade_habilidadesoft_id'
      })

      HabilidadeSoft.belongsTo(models.SoftSkills, {
        foreignKey: 'fk_softskill_habilidadesoft_id'
      })
    }
  }
  HabilidadeSoft.init({
    n: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'HabilidadeSofts',
  });
  return HabilidadeSoft;
};