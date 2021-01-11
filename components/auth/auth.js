const jwt = require('jwt-simple');
const SECRET_KEY = 'kasjgfdlasjvhxzkcdhsuf';
const moment = require('moment');


exports.createToken = (user) =>{
    const payLoad = {
        id: user._id,
        name: user.name,
        pass: user.pass,
        email: user.email,
        role: user.rol,
        createToken: moment().unix(),
        exp: moment().add(3, "hours").unix()
    }   
    return jwt.encode(payLoad, SECRET_KEY)
}