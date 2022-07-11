const express = require('express');
const TesteRoutes = require('../routes/TesteRoutes');

const rotas = (app) => {
    app.use(express.json(), TesteRoutes);
}

module.exports = rotas;