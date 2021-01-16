const jwt = require('jwt-simple');
const moment = require('moment');
const bcrypt = require('bcryptjs');
const Teacher = require('../teacher/model');
const Student = require('../student/model');
const SECRET_KEY = 'kasjgfdlasjvhxzkcdhsuf';


createToken = (user) =>{
    const payLoad = {
        id: user._id,
        name: user.name,
        pass: user.pass,
        email: user.email,
        createToken: moment().unix(),
        exp: moment().add(3, "hours").unix()
    }   
    return jwt.encode(payLoad, SECRET_KEY)
}

exports.login = async (req, res, next)=>{
    try{
    let data = await Teacher.findOne({email: req.body.email}) || await Student.findOne({email: req.body.email});
    const pass =  bcrypt.compareSync(req.body.pass, data.pass);
    if(pass === false) return res.json({error: 'ningún usuario coincide con usuario y contraseña'});
    else res.status(200).json({success: "Usuario logeado correctamente", token: createToken(data)})
    return data;
    }catch(error){
        console.error(error);
        res.status(500).send({message: 'Ha ocurrido un problema con el login'});
    }
    next();
};