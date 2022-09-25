const GeneralService = require('./GeneralService');
const { NewJobDto, NewVagasHardsDto, NewVagasSoftsDto } = require('../dto/newJobDto');
const UpdateJobDto = require('../dto/newJobDto/UpdateJobDto');
const UpdateVagasHardsDto = require('../dto/newJobDto/UpdateVagasHardsDto');
const UpdateVagasSoftsDto = require('../dto/newJobDto/UpdateVagasSoftsDto');
const { UserViewCompleteDto, NewHardSkillDto } = require('../dto');
const database = require('../models');
const { sequelize } = require('../models');

class RecruiterService extends GeneralService{
    constructor(){
        super('Vagas');
    }
    
    async createJobVacancy(body){
        const { hardskills, softskills } = body;

        await sequelize.transaction(async transaction =>{
            const job = await database.Vagas.create(
                new NewJobDto(body), { transaction });

            const hardskillList = hardskills.map(hardskill => 
                new NewVagasHardsDto(hardskill, job.id));

            const softskillList = softskills.map(softskill => 
                new NewVagasSoftsDto(softskill, job.id));

            await database.VagasHards.bulkCreate(hardskillList, { transaction });
            await database.VagasSofts.bulkCreate(softskillList, { transaction });

            return job;
        });
    }

    async getCandidateById(params){
        let user, infoPessoais, contatos, enderecos, habilidades, hab_hard;

        const userExist = await database.Usuarios.findOne({
            where: {id: params.id, usuario_tipo: 3}
        });

        if(!userExist) return [];

        await sequelize.transaction(async transaction =>{
            user = await database.Usuarios.findOne({
                where: { id: parseInt(params.id) }
            }, { transaction });

            infoPessoais = await database.InfoPessoais.findOne({
                where: { fk_usuarios_info_id: user.id }
            }, {transaction});

            contatos = await database.Contatos.findOne({
                where: { fk_infopessoais_cont_id: infoPessoais.id }
            }, { transaction });
            
            enderecos = await database.Enderecos.findOne({
                where: { fk_infopessoais_end_id: infoPessoais.id }
            }, { transaction });
            
            if(user.usuario_tipo===3){
                habilidades = await database.Habilidades.findAll({
                    where:{ fk_usuarios_hab_id: user.id },
                    include:[
                        {model: database.HardSkills}, 
                        {model: database.SoftSkills}]
                }, { transaction });
                
                hab_hard = await database.HabilidadeHards.findAll({
                    where: { fk_habilidade_habilidadehard_id : habilidades[0]['dataValues'].id }
                }, { transaction });
            }
        });

        return new UserViewCompleteDto(
            user, 
            infoPessoais, 
            contatos, 
            enderecos, 
            habilities(habilidades), 
            hardskills(habilidades, hab_hard),
            softskills(habilidades)
        );
    }

    async updateJob(req){
        await sequelize.transaction(async transaction =>{
            const updatedjob = await database.Vagas.update(new UpdateJobDto(req.body), {
                where:{
                    id: req.params.id
                }
            }, { transaction });

            if(updatedjob[0] > 0){
                const createHardskillList =  req.body.createskills.hardskills.map(skill => 
                    new NewVagasHardsDto(skill, req.params.id));

                if(createHardskillList.length > 0){
                    await database.VagasHards.bulkCreate(createHardskillList, { transaction });
                }

                const createSoftskillList =  req.body.createskills.softskills.map(skill => 
                    new NewVagasSoftsDto(skill, req.params.id));

                if(createSoftskillList.length > 0){
                    await database.VagasSofts.bulkCreate(createSoftskillList, { transaction });
                }
                
                //UPDATE DE HARDSKILL
                req.body.updateskills.hardskills.map(async skill => {
                    const { fk_hardskill_vagashard_id, fk_vagas_vagashard_id } = skill;

                    await database.VagasHards.update(new UpdateVagasHardsDto(skill), {
                        where: {
                            fk_hardskill_vagashard_id, 
                            fk_vagas_vagashard_id
                        }
                    });
                });

                //UPDATE DE SOFTSKILL
                req.body.updateskills.softskills.map(async skill => {
                    const { fk_softskill_vagassoft_id, fk_vagas_vagassoft_id } = skill;

                    await database.VagasSofts.update(new UpdateVagasSoftsDto(skill), {
                        where: {
                            fk_softskill_vagassoft_id, 
                            fk_vagas_vagassoft_id
                        }
                    });
                });

                //DELETE DE HARDSKILL
                req.body.deleteskills.hardskills.map(async skill => {
                    const { fk_hardskill_vagashard_id, fk_vagas_vagashard_id } = skill;

                    await database.VagasHards.destroy({
                        where: {fk_hardskill_vagashard_id, fk_vagas_vagashard_id}
                    }, {transaction});
                });

                //DELETE DE SOFTSKILL
                req.body.deleteskills.softskills.map(async skill => {
                    const { fk_softskill_vagassoft_id, fk_vagas_vagassoft_id } = skill;

                    await database.VagasSofts.destroy({
                        where: {fk_softskill_vagassoft_id, fk_vagas_vagassoft_id}
                    }, {transaction});
                });
            }
            return updatedjob;
        });
    }

    async getJobById(req){
        const { id } = req.params;

        const jobExist = await database.Vagas.findOne({
            where: { id }
        });

        if(!jobExist) return {message: "Vaga não encontrada"}

        let vagas, vagasHards, vagasSofts

        await sequelize.transaction(async transaction =>{
            vagas = await database.Vagas.findAll({
                where: { id }
            }, { transaction });

            vagasHards = await database.VagasHards.findAll({
                where: { fk_vagas_vagashard_id: id }
            }, { transaction });

            vagasSofts = await database.VagasSofts.findAll({
                where: { fk_vagas_vagassoft_id: id }
            }, { transaction });
        });

        return {
            job_describe: vagas,
            skills: {
                hardskills: await listaHardskills(vagasHards),
                softskills: await listaSoftskills(vagasSofts)
            }
        };
    }
}

async function listaHardskills(vagasHards){
    const listaHardskill = [];
    for(let i = 0; i < vagasHards.length; i++){
        const hs = await database.HardSkills.findOne({
            where: { id: vagasHards[i]['dataValues'].fk_hardskill_vagashard_id }
        });
        
        listaHardskill.push(
            {
                nivel_desejado: vagasHards[i]['dataValues'].nivel_desejado,
                nome_hardskill: hs['dataValues'].nome_hardskill,
                createdAt: vagasHards[i]['dataValues'].createdAt,
                updatedAt: vagasHards[i]['dataValues'].updatedAt,
                fk_hardskill_vagashard_id: vagasHards[i]['dataValues'].fk_hardskill_vagashard_id,
                fk_vagas_vagashard_id: vagasHards[i]['dataValues'].fk_vagas_vagashard_id
            }
        );
    }
    return listaHardskill;
}

async function listaSoftskills(vagasSofts){
    const listaSoftskill = [];
    for(let i = 0; i < vagasSofts.length; i++){
        const ss = await database.SoftSkills.findOne({
            where: { id: vagasSofts[i]['dataValues'].fk_softskill_vagassoft_id }
        });
        
        listaSoftskill.push(
            {
                nome_softskill: ss['dataValues'].nome_softskill,
                createdAt: vagasSofts[i]['dataValues'].createdAt,
                updatedAt: vagasSofts[i]['dataValues'].updatedAt,
                fk_softskill_vagassoft_id: vagasSofts[i]['dataValues'].fk_softskill_vagassoft_id,
                fk_vagas_vagassoft_id: vagasSofts[i]['dataValues'].fk_vagas_vagassoft_id
            }
        );
    }
    return listaSoftskill;
}

function habilities(habilidade){
    return habilidade ? habilidade[0]['dataValues'] : null;
}

function hardskills(hardskills, hab_hard){
    return hardskills ? hardskills[0]['HardSkills'].map((hardskill, i) => {
        return { 
            id: hardskill.id, 
            nome_hardskill: 
            hardskill.nome_hardskill, 
            level: hab_hard ? hab_hard[i]['dataValues'].level : null
        }
    }) : null;
}

function softskills(softskills){
    return softskills ? softskills[0]['SoftSkills'].map(softskill => {
        return { 
            id: softskill.id, 
            nome_softskill: softskill.nome_softskill
        }
    }) : null;
}

module.exports = RecruiterService;