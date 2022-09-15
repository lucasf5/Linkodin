const GeneralService = require('./GeneralService');
const { NewJobDto, NewVagasHardsDto, NewVagasSoftsDto } = require('../dto/newJobDto');
const { UserViewCompleteDto } = require('../dto');
const database = require('../models');
const { sequelize } = require('../models');

class OffererService extends GeneralService{
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

            habilidades = await database.Habilidades.findAll({
                where:{ id: user.id },
                include:[
                    {model: database.HardSkills}, 
                    {model: database.SoftSkills}]
            }, { transaction });

            hab_hard = await database.HabilidadeHards.findAll({
                where: { fk_habilidade_habilidadehard_id :habilidades[0]['dataValues'].id }
            }, { transaction })
        });

        return new UserViewCompleteDto(
            user, 
            infoPessoais, 
            contatos, 
            enderecos, 
            habilidades[0]['dataValues'], 
            habilidades[0]['HardSkills'].map((hardskill, i) => {
                return { 
                    id: hardskill.id, 
                    nome_hardskill: 
                    hardskill.nome_hardskill, 
                    level: hab_hard[i]['dataValues'].level
                }
            }),
            habilidades[0]['SoftSkills'].map(softskill => {
                return { 
                    id: softskill.id, 
                    nome_softskill: softskill.nome_softskill
                }
            })
        );
    }
}

module.exports = OffererService;