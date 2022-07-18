import { object, string } from "yup";

const userValidator = (req, res, next) => {
  const schema = object().shape({
    nome: string().required("O nome é obrigatório"),
    email: string().email().required("Email é obrigatório"),
    descricao: string().required("A descrição é obrigatória"),
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

export default userValidator;
