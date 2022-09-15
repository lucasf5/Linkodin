const { JobViewDto } = require('../dto/jobViewDto');
const database = require('../models');
const { sequelize } = require('../models');

class CandidateService{
    async getJobs(params){
        const userjobs = await database.UsuarioVaga.findAll({ 
            where: { 
                fk_usuarios_usuariovaga_id: params.id }
            });

        const jobs = [];

        for(let i = 0; i < userjobs.length; i++){
            jobs.push(await database.Vagas.findOne({ 
                where:{ 
                    id: userjobs[i].fk_vagas_usuariovaga_id }
                }));
        }
        return jobs.map(job => new JobViewDto(job));
    }

    async getJobById(params){
        const job = await database.Vagas.findOne(params.id);
        return new JobViewDto(job);
    }
}

module.exports = CandidateService;
