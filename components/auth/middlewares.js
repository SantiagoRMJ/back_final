const jwt = require('jwt-simple');
const moment = require('moment');



exports.authMiddleware = (req, res, next) => {
    const token = req.header('token');
    const now = moment().unix()
    if(!token) return res.status(401).json({message: 'no hay token'});
    try{
        jwt.decode(token, 'kasjgfdlasjvhxzkcdhsuf');
    }catch{
        return res.status(401).json({message: 'el token no es valido'})
    }
    const decode = jwt.decode(token, 'kasjgfdlasjvhxzkcdhsuf');
    if(now > decode.exp)return res.status(401).json({message: 'el token ha expirado'})
    next();
}