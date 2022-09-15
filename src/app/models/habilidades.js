'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Habilidades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Habilidades.belongsTo(models.Usuarios,{
        foreignKey: 'fk_usuarios_hab_id',
        onDelete: 'CASCADE'
      });

      Habilidades.belongsToMany(models.HardSkills, {
        through: 'HabilidadeHards',
        foreignKey: 'fk_habilidade_habilidadehard_id'
      })

      Habilidades.belongsToMany(models.SoftSkills, {
        through: 'HabilidadeSoft',
        foreignKey: 'fk_habilidade_habilidadesoft_id'
      })
    }
  }
  Habilidades.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    area: DataTypes.STRING,
    senioridade: DataTypes.STRING,
    fk_usuarios_hab_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Habilidades',
    timestamps: false
  });
  return Habilidades;
};