const express = require('express');
const rotas = require('./app/routes');
const db = require('./app/Config/dbConnect');

db.on("error", ()=> {
    console.log("Erro ao conectar com o banco de dados");
});
db.once("open", ()=>{
    console.log("conexão feita com sucesso!");
})

const app = express();

rotas(app);

module.exports = app;