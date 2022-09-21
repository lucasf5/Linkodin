const database = require('../models');
const { InfoPessoais, Habilidades } = require('../models');
const { StatusCode } = require('../enums');
const { RecruiterService, GeneralService } = require('../services');
const { UserViewDto } = require('../dto');

const recruiterService = new RecruiterService();
const generalService = new GeneralService('Usuarios');

class RecruiterController{
    static async getRegisteredVacancies(req,res){
        const { id } = req.params;
        try {
            const registeredVacancies = await database.Vagas.findAll({
                 where: { fk_usuarios_vag_id: id }
            });
            return res.status(StatusCode.OK).json(registeredVacancies);
        } catch (error) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    }
    static async newJob(req, res){
        try {
            const job = await RecruiterService.createJobVacancy(req.body);
            return res.status(StatusCode.OK).json(job);
        } catch (error) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    }

    static async getAllCandidates(req, res){
        try {
            const users = await generalService.getAllWithParams(
                {usuario_tipo: 3}, [InfoPessoais, Habilidades], req.query);
            
            const userInfo = users.rows.map(user => new UserViewDto(user));
            return userInfo.length === 0 ?
                res.status(StatusCode.NO_CONTENT).json({count: users.count, rows: userInfo}):
                res.status(StatusCode.OK).json({count: users.count, rows: userInfo});
        } catch (error) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    }

    static async getCandidateById(req, res){
        try {
            const candidate = await recruiterService.getCandidateById(req.params);

            return candidate === null ?
                res.status(StatusCode.NO_CONTENT).json(candidate):
                res.status(StatusCode.OK).json(candidate);
        } catch (error) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    }

    static async deleteJobById(req, res){
        const { id } = req.params;
        try {
            const job = await recruiterService.deleteById(id, false);
            return job === 0 ?
                res.status(StatusCode.NO_CONTENT).json(job):
                res.status(StatusCode.OK).json(job);
        } catch (error) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    }
}

module.exports = RecruiterController;