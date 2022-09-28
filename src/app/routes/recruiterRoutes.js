const { Router } = require('express');
const { validationToken } = require('../middlewares');
const { RecruiterController } = require('../controllers');

const router = Router();

const baseUrl = `${process.env.ROUTE_BASE}/recruiter`;

router.use('*', validationToken );

router
    .get(`${baseUrl}/:recruiterid/alljobs`, RecruiterController.getRegisteredVacancies)
    .get(`${baseUrl}/registeredjobs/:id`, RecruiterController.getRegisteredVacanciesById)
    .get(`${baseUrl}/allcandidates`, RecruiterController.getAllCandidates)
    .get(`${baseUrl}/candidate/:id`, RecruiterController.getCandidateById)
    .post(`${baseUrl}/newjob`, RecruiterController.newJob)
    .delete(`${baseUrl}/deletejob/:id`, RecruiterController.deleteJobById)
    .put(`${baseUrl}/updatejob/:id`, RecruiterController.updateJobById)
    
module.exports = router;