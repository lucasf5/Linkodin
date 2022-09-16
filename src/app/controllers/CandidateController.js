const StatusCode = require('../enums/StatusCode');
const database = require('../models');
const { CandidateService } = require('../services');


const candidateService = new CandidateService();

class CandidateController{
    static async getAllVagas(req, res){
        try {
            const jobs = await database.Vagas.findAll();
            return res.status(StatusCode.OK).json(jobs);
        } catch (error) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    }

    static async getAppliedJobs(req, res){
        try {
            const jobs = await candidateService.getJobs(req.params);
            return res.status(StatusCode.OK).json(jobs);
        } catch (error) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    }

    static async candidatarVagar(req, res){
        const {
            fk_usuarios_usuariovaga_id,
            fk_vagas_usuariovaga_id
        } = req.body;
        try {
            const jobs = await database.UsuarioVaga.create({
                fk_usuarios_usuariovaga_id,
                fk_vagas_usuariovaga_id, 
                data_hora: new Date,
                createdAt: new Date,
                updatedAt: new Date
            });
            return res.status(StatusCode.OK).json(jobs)
        } catch (error) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    }
}

module.exports = CandidateController;