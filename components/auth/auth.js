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
        role: user.role,
        createToken: moment().unix(),
        exp: moment().add(3, "hours").unix()
    }   
    return jwt.encode(payLoad, SECRET_KEY)
}

exports.login = async (req, res)=>{
    try{
    const teacher = await Teacher.findOne({email: req.body.email}).select('+pass').lean();
    const student = await Student.findOne({email: req.body.email}).select('+pass').lean();
    if(!teacher || !student) res.status(404).json({message: 'ningún usuario coincide con usuario y contraseña'});
    const data = teacher ? {...teacher, role: 'teacher'} : {...student, role: 'student'};    
    const pass =  bcrypt.compareSync(req.body.pass, data.pass);
    if(pass === false) return res.status(404).json({error: 'ningún usuario coincide con usuario y contraseña'});
    else res.status(200).json({success: "Usuario logeado correctamente", token: createToken(data), data: data})
    return data;
    }catch(error){
        console.error(error);
        res.status(500).json({message: 'Ha ocurrido un problema con el login'});
    }
};

