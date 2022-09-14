import { Router } from 'express';
import AuthController from '../controllers/AuthController.js';
//import AuthValidation from '../middlewares/AuthValidation.js';

const AuthRouter = Router();

AuthRouter
  .get('/login', AuthController.login)
  .get('/logout', AuthController.logout)

export default AuthRouter;