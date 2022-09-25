'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class VagasSofts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      VagasSofts.belongsTo(models.Vagas,{
        foreignKey: 'fk_vagas_vagassoft_id',
        onDelete: 'CASCADE'
      })

      VagasSofts.belongsTo(models.SoftSkills,{
        foreignKey: 'fk_softskill_vagassoft_id',
        onDelete: 'CASCADE'
      })
    }
  }
  VagasSofts.init({
    
  }, {
    sequelize,
    modelName: 'VagasSofts',
  });
  return VagasSofts;
};