const { validationLogin, validationToken, validationUser } = require('../middlewares');
const passport = require('passport')

const { Router } = require('express');
const { UserController } = require('../controllers');

const router = Router();

const baseUrl = `${process.env.ROUTE_BASE}/users`;

router
    .post(`${process.env.ROUTE_BASE}/register`, validationUser, UserController.novoUsuario)
    .post(`${process.env.ROUTE_BASE}/login`, validationLogin, passport.authenticate('local', {session: false}), UserController.login)
    .get(`${baseUrl}`, UserController.listarTodosUsuarios)
    .get(`${baseUrl}/:id`, UserController.listarUsuarioPorId)
    .put(`${baseUrl}/:id`, UserController.atualizarUsuario)
    .delete(`${baseUrl}/:id`, UserController.deletarUsuario)

module.exports = router;