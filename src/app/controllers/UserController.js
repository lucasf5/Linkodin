const { GeneralService, UserService } = require('../services');
const { StatusCode } = require('../enums');

const service = new GeneralService('Usuarios');
const usuarioService = new UserService();

class UserController{
    static async listarTodosUsuarios(req, res){
        try {
            const usuarios = await service.getAll();
            return res.status(StatusCode.OK).json(usuarios);
        } catch (error) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({message: error.message});
        }
    }

    static async listarUsuarioPorId(req, res){
        const { id } = req.params;

        try {
            const usuario = await usuarioService.getById(id);
            return usuario === null ? 
                res.status(StatusCode.NO_CONTENT).json(usuario):
                res.status(StatusCode.OK).json(usuario);
        } catch (error) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({message: error.message});
        }
    }

    // static async login(req, res){

    // }

    // static async logout(req, res){

    // }

    static async novoUsuario(req, res){
        try {
            const usuario = await usuarioService.createNewUser(req.body);
            return res.status(StatusCode.CREATED).json(usuario);
        } catch (error) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({message: error.message});
        }
    }

    static async atualizarUsuario(req, res){
        try {
            const usuario = await usuarioService.atualizarUsuario(req);
            return res.status(StatusCode.OK).json(usuario);
        } catch (error) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({message: error.message});
        }
    }

    static async deletarUsuario(req, res){
        const { id } = req.params;
        try {
            await usuarioService.deleteById(id, false);
            return res.status(StatusCode.OK).json({message: `id ${id} deletado.`});
        } catch (error) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({message: error.message});
        }
    }
}

module.exports = UserController;