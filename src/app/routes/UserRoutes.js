import { Router } from 'express';
import UserController from '../controller/UserController.js';
import ValidationUser from '../middlewares/ValidationUser.js';

const UserRouter = Router();

UserRouter
    .get('/', UserController.getAll)
    .get('/:id', UserController.getById)
    .post('/create-user', ValidationUser, UserController.create)
    .put('/:id', UserController.update)
    .delete('/:id', UserController.delete); 

export default UserRouter;