'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Enderecos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Enderecos.belongsTo(models.InfoPessoais,{
        foreignKey: 'fk_infopessoais_end_id',
        onDelete: 'CASCADE'
      })
    }
  }
  Enderecos.init({
    logradouro: DataTypes.STRING,
    nome_logradouro: DataTypes.STRING,
    numero_logradouro: DataTypes.STRING,
    complemento: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    fk_infopessoais_end_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Enderecos',
    timestamps: false
  });
  return Enderecos;
};