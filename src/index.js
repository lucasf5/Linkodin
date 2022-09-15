const express = require('express');
const rotas = require('./app/routes');
// const db = require('./app/config/dbConnect');
const { serve, setup } = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const app = express();

app.use('/api-docs', serve, setup(swaggerDocument));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

rotas(app);

module.exports =  app;