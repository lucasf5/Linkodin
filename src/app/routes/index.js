import { json } from 'express';
import AuthRoutes from './AuthRoutes.js';
import UserRoutes from './UserRoutes.js';

const rotas = (app) => {
  app.use(json(), AuthRoutes, UserRoutes);
}

export default rotas;