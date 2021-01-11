const Teacher = require('./model');
const moment = require('moment');
const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');
const SECRET_KEY = 'kasjgfdlasjvhxzkcdhsuf'

createToken = (user) =>{
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

exports.registro = async (req, res) => {
    req.body.pass = bcrypt.hashSync(req.body.pass, 3);    
    try {
        const newTeacher = await Teacher.create({
            name: req.body.name,
            pass: req.body.pass,
            email: req.body.email,
            classes: req.body.classes,
            grade: req.body.grade,
            subject: req.body.subject
        });
       
        res.status(200).json({message: 'Usuario creado correctamente', nuevoUsuario:newTeacher});
    } catch (error) {
        res.status(500).send({message: 'El usuario no ha podido crearse correctamente'});
    }
};

exports.login = async (req, res)=>{
    try{
    const name = req.body.name;
    let data = await Teacher.findOne({email: req.body.email});
    const pass =  bcrypt.compareSync(req.body.pass, data.pass);
    if(!name || pass === null) return res.json({error: 'faltan datos'});
    if(pass === false) return res.json({error: 'ningún usuario coincide con tu usuario y contraseña'});
    else res.status(200).json({sucess: "usuario logeado correctamente", token: createToken(data)})
    return data;
    }catch(error){
        console.error(error);
        res.status(500).send({message: 'Ha ocurrido un problema con el login'})
    }
};