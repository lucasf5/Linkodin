require('dotenv').config();
const express = require('express');
const rotas = require('./app/routes');
const { serve, setup } = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');
require('./app/config');

const app = express();

var options = {
  customCss: '.swagger-ui .wrapper { padding: 0 6rem .5rem 6rem }',
};

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api-docs', serve, setup(swaggerDocument, options));

rotas(app);

module.exports =  app;