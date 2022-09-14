import { Router } from 'express';
import UserController from '../controllers/UserController.js';
import ValidationUser from '../middlewares/ValidationUser.js';

const UserRouter = Router();

UserRouter
  .get('/users', UserController.getAll)
  .get('/users/:id', UserController.getById)
  .post('/users', ValidationUser, UserController.store)
  .put('/users/:id', UserController.update)
  .delete('/users/:id', UserController.delete); 

export default UserRouter;