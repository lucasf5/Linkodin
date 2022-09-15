// import { json } from 'express';
// import UserRoutes from './UserRoutes.js';

// const rotas = (app) => {
//     app.use(json(), UserRoutes);
// }

// export default rotas;

const usuarios = require('./userRoutes');
const admin = require('./adminRoutes');
const offerer = require('./offererRoutes');
const candidate = require('./candidateRoutes');

module.exports = app =>{
    app.use(
        usuarios,
        admin,
        offerer,
        candidate
    );
}