const { Router } = require('express');
const { CandidateController } = require('../controllers');

const router = Router();

const baseUrl = `${process.env.ROUTE_BASE}/candidate`;

router
    .get(`${baseUrl}/job`, CandidateController.getAllVagas)
    .get(`${baseUrl}/appliedjobs/:id`, CandidateController.getAppliedJobs)
    .post(`${baseUrl}/applyjob`, CandidateController.candidatarVagar)
    

module.exports = router;