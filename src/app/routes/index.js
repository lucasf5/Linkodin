import { json } from 'express';
import UserRoutes from './UserRoutes.js';

const rotas = (app) => {
    app.use(json(), UserRoutes);
}

export default rotas;