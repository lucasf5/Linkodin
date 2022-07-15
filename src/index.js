const express = require('express');
const rotas = require('./app/routes');
const db = require('./app/Config/dbConnect');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

db.on("error", ()=> {
    console.log("Erro ao conectar com o banco de dados");
});
db.once("open", ()=>{
    console.log("conexão feita com sucesso!");
})

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

rotas(app);

module.exports = app;