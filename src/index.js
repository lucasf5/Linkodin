require('dotenv').config();
const express = require('express');
const rotas = require('./app/routes');
const { serve, setup } = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
require('./app/config');

const app = express();

app.use('/api-docs', serve, setup(swaggerDocument));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

rotas(app);

module.exports =  app;