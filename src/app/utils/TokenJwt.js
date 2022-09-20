const jsonWebToken = require('jsonwebtoken');

class TokenJwt{
    static async createToken(user){
        const payload = {
            id: user.id
        }
        return jsonWebToken.sign(payload, process.env.JWT_kEY, {expiresIn: '15m'});
    }
}

module.exports = TokenJwt;