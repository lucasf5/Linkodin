'use strict';
/**
 * 
 * Model criado com o sequelize-cli
 * comando: sequelize model:generate --name User --attributes nome:string,email:string,descricao:text
 * 
 */

// const { Model } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     static associate(models) {
//       // define association here
//     }
//   }
//   User.init({
//     nome: DataTypes.STRING,
//     email: DataTypes.STRING,
//     descricao: DataTypes.TEXT
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };


/** 
 * 
 * Model criado seguindo a documentação do Sequelize utilizando o sequelize.define
 * Referência: https://sequelize.org/docs/v6/core-concepts/model-basics/
 *  
**/
// import { Sequelize, DataTypes } from 'sequelize';
// import sequelize from '../config/dbMysql.js';

// const User = sequelize.define('User', 
//   {
//     nome: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     email: {
//       type: DataTypes.STRING
//     },
//     descricao: {
//       type: DataTypes.TEXT
//     }
//   }, 
//   {
//     // Other model options go here
//     sequelize, // We need to pass the connection instance
//     modelName: 'User' // We need to choose the model name
//   }
// );

// // `sequelize.define` also returns the model
// if(User === sequelize.models.User) { // true
//   console.log('===> Model User criado utilziando o sequelize.define');
// }

// export default User;


/**
 * 
 * Model criado seguindo a documentação do Sequelize utilizando o modelo de extensão
 * Referência: https://sequelize.org/docs/v6/core-concepts/model-basics/
 * 
 */
import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from './../config/dbMysql.js'; 

class User extends Model { }

User.init({
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});

// the defined model is the class itself
if(User === sequelize.models.User) {
  console.log('===> Model User criado utilizando modelo de extensão');
}

export default User;