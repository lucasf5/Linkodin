const UserModel = require('../model/UserModel.js');
class UserController {

    static getAll = async (req, res) => {
        try{
            const users = await UserModel.find();
            res.status(200).json(users);
        } catch(err){
            res.status(400).send({
                message: "Erro ao requisitar a informação - getAll"
            })
        }
    }

    static getById = async (req, res) => {
        try{
            const user = await UserModel.findById(req.params.id);
            res.status(200).json(user);
        } catch(err){
            res.status(400).send({
                message: "Erro ao requisitar a informação - getById"
            })
        }
    }

    static create = async (req, res) => {
        try{
            const { nome, email, descricao } = req.body;
            const user = await UserModel.create({ nome, email, descricao });
            res.status(201).json({
                message: "Usuário criado com sucesso",
                user
            });
        } catch(err){
            res.status(400).send({
                message: "Erro ao criar a informação - create",
                error: err.message
            })
        }
    }

    static update = async (req, res) => {
        try{
            const { nome, descricao, email } = req.body;
            const user = await UserModel.findByIdAndUpdate(req.params.id, { nome, descricao, email });
            res.status(200).json({
                message: "Usuário atualizado com sucesso",
                user
            });
        } catch(err){
            res.status(400).send({
                message: "Erro ao atualizar a informação - update",
                error: err.message
            })
        }
    }

    static delete = async (req, res) => {
        try{
            await UserModel.findByIdAndDelete(req.params.id);
            res.status(200).json({
                message: "Usuário deletado com sucesso"
            });
        } catch(err){
            res.status(400).send({
                message: "Erro ao deletar a informação - delete",
                error: err.message
            })
        }
    }

}

module.exports = UserController;