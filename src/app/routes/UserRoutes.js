// import ValidationUser from '../middlewares/ValidationUser.js';

const { Router } = require('express');
const UserController = require('../controllers/UserController');

const router = Router();

const baseUrl = '/users';

router
    .get(`${baseUrl}`, UserController.listarTodosUsuarios)
    .get(`${baseUrl}/:id`, UserController.listarUsuarioPorId)
    .post(`/register`, UserController.novoUsuario)
    .put(`${baseUrl}/:id`, UserController.atualizarUsuario)
    .delete(`${baseUrl}/:id`, UserController.deletarUsuario)

module.exports = router;