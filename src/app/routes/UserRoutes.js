// import ValidationUser from '../middlewares/ValidationUser.js';
const { validationLogin, validationToken } = require('../middlewares');
const passport = require('passport')

const { Router } = require('express');
const UserController = require('../controllers/UserController');

const router = Router();

const baseUrl = '/users';

router
    .get(`${baseUrl}`, validationToken, UserController.listarTodosUsuarios)
    .get(`${baseUrl}/:id`, UserController.listarUsuarioPorId)
    .post(`/login`, validationLogin, passport.authenticate('local', {session: false}), UserController.login)
    .post(`/register`, UserController.novoUsuario)
    .put(`${baseUrl}/:id`, UserController.atualizarUsuario)
    .delete(`${baseUrl}/:id`, UserController.deletarUsuario)

module.exports = router;