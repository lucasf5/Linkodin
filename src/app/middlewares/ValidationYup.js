const yup = require("yup");

const userValidator = (req, res, next) => {
  const schema = yup.object().shape({
    nome: yup.string().required("O nome é obrigatório"),
    email: yup.string().email().required("Email é obrigatório"),
    descricao: yup.string().required("A descrição é obrigatória"),
  });

  schema
    .validate(req.body, { abortEarly: false })
    .then(() => {
      next();
    })
    .catch((err) => {
      return res.status(400).json({
        error: err.errors,
      });
    })
    .catch(next);
};

module.exports = userValidator;
