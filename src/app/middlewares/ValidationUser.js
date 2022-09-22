const database = require('../models');

const validationUser = async (req, res, next) => {
  
  const { nome_usuario, email, senha, usuario_tipo, cpf_cnpj } = req.body;

  if (!nome_usuario || !email || !senha || !usuario_tipo || !cpf_cnpj) {
    return res.status(400).json({
      error: "Dados incompletos",
    });
  }

  const userEncontrado = await database.InfoPessoais.findOne({ 
    where: { 
      cpf_cnpj  
    },
    include: {  
      model: database.Contatos,
      where: { email }
    } 
  });

  if (userEncontrado) {
    return res.status(400).json({
      error: "Usuário já cadastrado",
    });
  }

  next();
};

module.exports = validationUser;