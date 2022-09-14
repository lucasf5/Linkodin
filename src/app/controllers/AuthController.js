class AuthController {

  static login = async (req, res) => {
    try {
      res.status(200).send({msg: 'AuthController::login'});
    } catch (err) {
      res.status(400).send({
        message: "Erro na tentativa de login - AuthController::login"
      })
    }
  }
  
  static logout = async (req, res) => {
    try {
      res.status(200).send({msg: 'AuthController::logout'});
    } catch (err) {
      res.status(400).send({
        message: "Erro na tentativa de login - AuthController::logout"
      })
    }
  }

}

export default AuthController;