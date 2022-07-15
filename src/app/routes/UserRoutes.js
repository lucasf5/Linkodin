const express = require('express');
const UserController = require('../controller/UserController');
const ValidationUser = require('../middlewares/ValidationUser');

const UserRouter = express.Router();

UserRouter
    .get('/', UserController.getAll)
    .get('/:id', UserController.getById)
    .post('/create-user', ValidationUser, UserController.create)
    .put('/:id', UserController.update)
    .delete('/:id', UserController.delete);

module.exports = UserRouter;