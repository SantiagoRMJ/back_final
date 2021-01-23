const jwt = requires('jwt-simple');
const moment = requires('moment');



exports.authMiddleware = (req, res, next) => {
    const token = req.header('token');
    const now = moment().unix()
    if(!token) return res.status(401).json({message: 'no hay token'});
    try{
        jwt.decode(token, 'kasjgfdlasjvhxzkcdhsuf');
    }catch{
        return res.status(401).json({message: 'el token no es valido'})
    }
    if(now > decode.exp)return res.status(401).json({message: 'el token ha expirado'})
    next();
}