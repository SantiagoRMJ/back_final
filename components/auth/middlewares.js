const jwt = require('jwt-simple');



exports.authMiddleware = (req, res, next) => {
    const token = req.header('token');
    if(!token) return res.status(401).json({message: 'no hay token'});
    try{
       const decoded =  jwt.decode(token, 'kasjgfdlasjvhxzkcdhsuf');
       req.token = decoded
    }catch{
        return res.status(401).json({message: 'el token no es valido'})
    }
    next();
}