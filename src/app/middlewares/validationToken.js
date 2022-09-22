const jsonWebToken = require('jsonwebtoken');

const validationToken = async (req, res, next) => {
    const[tokenType, tokenValue] = req.headers.authorization?.split(' ') || [' ',' '];
    
    if(!tokenValue){
      return res.status(401).send('Access denied. No token provided.gsdhsgshgsgh');
    }
    
    try {
        const payload = jsonWebToken.verify(tokenValue, process.env.JWT_KEY);
        const userIdFromToken = typeof payload !== "string" && payload.id;
        if(!userIdFromToken){
            return res.status(401).json({message: 'Access denied. Invalid token.'});
        }
        return next();
        
    } catch (error) { 
        if(error.message === 'jwt expired'){
            return res.status(401).json({message: 'Token expirado.', expiradoEm: error.expiredAt});
        }
        if (error.message === 'jwt must be provided' || error.message === 'jwt malformed'){
            return res.status(401).json({message: 'Token não fornecido ou inválido.'});
        }
        if (error.message === 'invalid signature'){
            return res.status(401).json({message: 'Assinatura inválida.'});
        }
        return res.status(401).json({message: error.message});
    }
};

module.exports = validationToken;