const express = require('express');
const UserRoutes = require('./UserRoutes');

const rotas = (app) => {
    app.use(express.json(), UserRoutes);
}

module.exports = rotas;