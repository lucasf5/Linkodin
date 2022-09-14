import User from "../models/User.js";

const ValidationUser = async (req, res, next) => {
  const { nome, email, descricao } = req.body;

  if (!nome || !email || !descricao) {
    return res.status(400).json({
      error: "Dados incompletos",
    });
  }
  
  const userEncontrado = await User.findOne({ where: { email } });

  if (userEncontrado) {
    return res.status(400).json({
      error: "Usuário já cadastrado",
    });
  }

  next();
};

export default ValidationUser;