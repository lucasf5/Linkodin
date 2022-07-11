const express = require('express');
const TesteController = require('../controller/TesteController');

const TesteRoutes = express.Router();

TesteRoutes
    .get('/', TesteController.getAll)
    .get('/:id', TesteController.getById)
    .post('/', TesteController.create)



module.exports = TesteRoutes;