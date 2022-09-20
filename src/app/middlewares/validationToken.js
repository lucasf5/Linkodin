const jsonWebToken = require('jsonwebtoken');

const validationToken = async (req, res, next) => {
    try {
        const token = req.rawHeaders[1].split(' ')[1];

        const valido = jsonWebToken.verify(token, process.env.JWT_KEY);
        if(valido){
            next();
        }
    } catch (error) {
        if(error.message === 'jwt expired'){
            return res.status(401).json({message: 'token expirado', expiradoEm: error.expiredAt});
        }

        if(error.message === 'jwt must be provided'){
            return res.status(401).json({message: 'token deve ser fornecido'});
        }
    }
};

module.exports = validationToken;