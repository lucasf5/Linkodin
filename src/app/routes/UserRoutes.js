const express = require('express');
const UserController = require('../controller/UserController');

const TesteRoutes = express.Router();

TesteRoutes
    .get('/', UserController.getAll)
    .get('/:id', UserController.getById)
    .post('/', UserController.create)
    .put('/:id', UserController.update)
    .delete('/:id', UserController.delete);

module.exports = TesteRoutes;