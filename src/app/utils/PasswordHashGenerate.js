const bcrypt = require('bcrypt');

class PasswordHashGenerate{
    static generateHash(senha){
        return bcrypt.hash(senha, 12 /*salt*/);
    }

    static async compareHash(senha, senhaHash){
        return  bcrypt.compare(senha, senhaHash, function(err, res) {
            if (err){
              // handle error
              console.log('erro')
            }
            if (res) {
              // Send JWT
              console.log('jwt')
            } else {
              // response is OutgoingMessage object that server response http request
              console.log(false)
            //   return response.json({success: false, message: 'passwords do not match'});
            }
          })
    }
}

module.exports = PasswordHashGenerate;