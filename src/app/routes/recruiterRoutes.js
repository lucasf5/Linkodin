const { Router } = require('express');
const { RecruiterController } = require('../controllers');

const router = Router();

const baseUrl = `${process.env.ROUTE_BASE}/recruiter`;

router
    .get(`${baseUrl}/registeredjobs/:id`, RecruiterController.getRegisteredVacancies)
    .get(`${baseUrl}/allcandidates`, RecruiterController.getAllCandidates)
    .get(`${baseUrl}/candidate/:id`, RecruiterController.getCandidateById)
    .post(`${baseUrl}/newjob`, RecruiterController.newJob)
    .delete(`${baseUrl}/deletejob/:id`, RecruiterController.deleteJobById)
module.exports = router;