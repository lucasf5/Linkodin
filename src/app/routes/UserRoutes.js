const { validationLogin, validationToken, validationUser } = require('../middlewares');
const passport = require('passport')

const { Router } = require('express');
const { UserController } = require('../controllers');

const router = Router();

const baseUrl = `${process.env.ROUTE_BASE}/users`;

router
    .get(`${baseUrl}`, validationToken, UserController.listarTodosUsuarios)
    .get(`${baseUrl}/:id`, UserController.listarUsuarioPorId)
    .post(`/login`, validationLogin, passport.authenticate('local', {session: false}), UserController.login)
    .post(`/register`, validationUser, UserController.novoUsuario)
    .put(`${baseUrl}/:id`, UserController.atualizarUsuario)
    .delete(`${baseUrl}/:id`, UserController.deletarUsuario)

module.exports = router;