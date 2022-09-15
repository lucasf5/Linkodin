'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class InfoPessoais extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      InfoPessoais.belongsTo(models.Usuarios, {
        foreignKey: 'fk_usuarios_info_id',
        onDelete: 'CASCADE'
      });
      InfoPessoais.hasOne(models.Contatos,{
        foreignKey: 'fk_infopessoais_cont_id',
        onDelete: 'CASCADE'
      })
      InfoPessoais.hasOne(models.Enderecos,{
        foreignKey: 'fk_infopessoais_end_id',
        onDelete: 'CASCADE'
      })
    }
  }
  InfoPessoais.init({
    cpf_cnpj: DataTypes.STRING,
    data_nasc: DataTypes.DATEONLY,
    nome_completo: DataTypes.STRING,
    sobre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'InfoPessoais',
    timestamps: false
  });
  return InfoPessoais;
};