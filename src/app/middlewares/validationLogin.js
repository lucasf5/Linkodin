const database = require('../models');
const bcrypt = require('bcrypt');

const validationLogin = async (req, res, next) => {
    const { email, senha } = req.body;

    if(email === ''){
        return res.status(401).json({error: "campo email é obrigatório"})
    }

    if(senha === ''){
        return res.status(401).json({error: "campo senha é obrigatório"})
    }


    const contato = await database.Contatos.findOne({where: {email}});

    if(!contato){
        return res.status(401).json({message: "usuário inexistente"});
    }

    let infoPessoais, usuario;
    if(contato){
        infoPessoais = await database.InfoPessoais.findOne({ where: { id: contato.fk_infopessoais_cont_id}})
        usuario = await database.Usuarios.findOne({ where: {id: infoPessoais.fk_usuarios_info_id}})
    }

    const verifiedPass = await bcrypt.compare(senha, usuario.senha);

    if(!verifiedPass){
        return res.status(401).json({message: 'senha inválida'});
    }


  next();
};

module.exports = validationLogin;