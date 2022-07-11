const UserModel = require('../model/UserModel.js');
class TesteController {

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
            const { nome, descricao } = req.body;
            const user = await UserModel.create({ nome, descricao });
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

}

module.exports = TesteController;