const { Router } = require('express');
const CandidateController = require('../controller/CandidateController');

const router = Router();

const baseUrl = '/candidate';

router
    .get(`${baseUrl}/job`, CandidateController.getAllVagas)
    .get(`${baseUrl}/appliedjobs/:id`, CandidateController.getAppliedJobs)
    .post(`${baseUrl}/applyjob`, CandidateController.candidatarVagar)
    

module.exports = router;