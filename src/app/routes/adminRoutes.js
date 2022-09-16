const { Router } = require('express');
const AdminController = require('../controllers/AdminController');

const router = Router();

const baseUrl = '/admin';

router
    .get(`${baseUrl}/users`, AdminController.getAllUsers)
    .get(`${baseUrl}/users/:id`, AdminController.getUserById)
    .post(`${baseUrl}/users`, AdminController.createNewUser)
    .delete(`${baseUrl}/users/softdelete/:id`, AdminController.softDeleteUser)
    .delete(`${baseUrl}/users/harddelete/:id`, AdminController.hardDeleteUser)
    .get(`${baseUrl}/hardskill`, AdminController.getAllHardSkills)
    .post(`${baseUrl}/hardskill`, AdminController.createNewHardSkill)
    .delete(`${baseUrl}/hardskill/:id`, AdminController.deleteHardSkill)
    .get(`${baseUrl}/softskill`, AdminController.getAllSoftSkills)
    .post(`${baseUrl}/softskill`, AdminController.createNewSoftSkill)
    .delete(`${baseUrl}/softskill/:id`, AdminController.deleteSoftSkill)

module.exports = router;