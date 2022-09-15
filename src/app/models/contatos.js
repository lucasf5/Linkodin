'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Contatos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Contatos.belongsTo(models.InfoPessoais,{
        foreignKey: 'fk_infopessoais_cont_id',
        onDelete: 'CASCADE'
      })
    }
  }
  Contatos.init({
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail: true
      }
    },
    telefone_fixo: DataTypes.STRING,
    telefone_celular: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Contatos',
    timestamps: false
  });
  return Contatos;
};