import express from 'express';
import rotas from './app/routes/index.js';
import db from './app/Config/dbConnect.js';
import { serve, setup } from 'swagger-ui-express';
import swaggerDocument from '../swagger.json' assert {type: "json"};

db.on("error", ()=> {
    console.log("Erro ao conectar com o banco de dados");
});
db.once("open", ()=>{
    console.log("conexão feita com sucesso!");
})

const app = express();

app.use('/api-docs', serve, setup(swaggerDocument));

rotas(app);

export default app;
