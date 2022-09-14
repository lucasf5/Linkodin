import User from '../models/user.js';

class UserController {

  static getAll = async (req, res) => {
    try{
      const users = await User.findAll({
        attributes: ['nome', 'email', 'descricao']
      });
      res.status(200).json(users);
    } catch(err){
      res.status(400).send({
        message: "Erro ao requisitar a informação - UserController::getAll"
      })
    }
  }

  static getById = async (req, res) => {
    try{
      const { id } = req.params;
      // const user = await User.findByPk(id);
      const user = await User.findAll({
        attributes: ['nome', 'email', 'descricao'],
        where: { id }
      });
      res.status(200).json(user);
    } catch(err){
      res.status(400).send({
        message: "Erro ao requisitar a informação - UserController::getById"
      })
    }
  }

  static store = async (req, res) => {
    try{
      const { nome, email, descricao } = req.body;
      const user = await User.create({ nome, email, descricao });
      res.status(201).json({
        message: "Usuário criado com sucesso",
        user
      });
    } catch(err){
      res.status(400).send({
        message: "Erro ao criar a informação - UserController::store",
        error: err.message
      })
    }
  }

  static update = async (req, res) => {
    try{
      const { id } = req.params;
      const { nome, email, descricao} = req.body;
      
      if (!nome || !email || !descricao) {
        return res.status(400).json({
          error: "Dados incompletos",
        });
      }
      
      const user = await User.findByPk(id);
      
      if(user) {
        user.update({
          nome: nome,
          email: email,
          descricao: descricao
        });
      }

      await user.save();

      res.status(200).json({
        message: "Usuário atualizado com sucesso",
        user
      });
    } catch(err){
      res.status(400).send({
        message: "Erro ao atualizar a informação - UserController::update",
        error: err.message
      })
    }
  }

  static delete = async (req, res) => {
    try{
      const { id } = req.params;
      const user = await User.findByPk(id);
      if(user){
        await user.destroy()
      }
      res.status(200).json({
        message: "Usuário deletado com sucesso"
      });
    } catch(err){
      res.status(400).send({
        message: "Erro ao deletar a informação - UserController::delete",
        error: err.message
      })
    }
  }

}

export default UserController;