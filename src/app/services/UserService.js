const GeneralService = require('./GeneralService');
const database = require('../models');
const { sequelize } = require('../models');
const { 
    NewUserDto, 
    NewInfoPessoaisDto, 
    NewContatoDto, 
    NewEnderecoDto, 
    NewHabilidadeDto } = require('../dto/newUserDto');

const {
    UpdateUserDto,
    UpdateInfoPessoaisDto,
    UpdateContatoDto,
    UpdateEnderecoDto } = require('../dto/updateUserDto');


class UserService extends GeneralService{
    constructor(){
        super('Usuarios');
    }

    async createNewUser(body){
        let novoUsuario;

        await sequelize.transaction(async transaction =>{
            novoUsuario = await database.Usuarios.create(
                new NewUserDto(body), {transaction});
                
            const novoInfoPessoais = await database.InfoPessoais.create(
                new NewInfoPessoaisDto(body, novoUsuario.id), {transaction});
            
            const novoContato = await database.Contatos.create(
                new NewContatoDto(body, novoInfoPessoais.id), {transaction});
            
            const novoEndereco = await database.Enderecos.create(
                new NewEnderecoDto(novoInfoPessoais.id), {transaction});

            if(body.usuario_tipo === 3){
                const novaHabilidade = await database.Habilidades.create(
                    new NewHabilidadeDto(novoUsuario.id), {transaction});
            }
        });
        return novoUsuario;
    }

    async atualizarUsuario(req){
        await sequelize.transaction(async transaction =>{
            const usuario = await database.Usuarios.findOne({
                where: { id: req.params.id }
            }, {transaction})
            const infoPessoais = await database.InfoPessoais.findOne({
                where: {fk_usuarios_info_id: usuario.id}
            }, {transaction});
            const contatos = await database.Contatos.findOne({
                where: {fk_infopessoais_cont_id: infoPessoais.id}
            }, {transaction});
            const enderecos = await database.Enderecos.findOne({
                where: {fk_infopessoais_end_id: infoPessoais.id}
            }, {transaction});

            await database.Usuarios.update(new UpdateUserDto(req.body), {
                where: { id: usuario.id }
            }, {transaction});
            await database.InfoPessoais.update(new UpdateInfoPessoaisDto(req.body), {
                where: { id: infoPessoais.id }
            }, {transaction});
            await database.Contatos.update(new UpdateContatoDto(req.body), {
                where: { id: contatos.id }
            }, {transaction});
            await database.Enderecos.update(new UpdateEnderecoDto(req.body), {
                where: { id: enderecos.id }
            }, {transaction});
        });
    }
}

module.exports = UserService;