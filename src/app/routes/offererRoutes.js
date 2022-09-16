const { Router } = require('express');
const OffererController = require('../controllers/OffererController');

const router = Router();

const baseUrl = '/offerer';

router
    .get(`${baseUrl}/registeredjobs/:id`, OffererController.getRegisteredVacancies)
    .get(`${baseUrl}/allcandidates`, OffererController.getAllCandidates)
    .get(`${baseUrl}/candidate/:id`, OffererController.getCandidateById)
    .post(`${baseUrl}/newjob`, OffererController.newJob)
    .delete(`${baseUrl}/deletejob/:id`, OffererController.deleteJobById)
module.exports = router;