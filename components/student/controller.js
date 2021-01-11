const Student = require('./model');
const bcrypt = require('bcryptjs');
const createToken = require('../auth/auth');

exports.register = async (req, res) => {
    req.body.pass = bcrypt.hashSync(req.body.pass, 3);    
    try {
        const newStudent = await Student.create({
            name: req.body.name,
            pass: req.body.pass,
            email: req.body.email,
            class: req.body.class
        });
       
        res.status(200).json({message: 'Usuario creado correctamente', nuevoUsuario:newStudent});
    } catch (error) {
        res.status(500).send({message: 'El usuario no ha podido crearse correctamente'});
    }
};

exports.login = async (req, res)=>{
    try{
    const name = req.body.name;
    let data = await Student.findOne({email: req.body.email});
    const pass =  bcrypt.compareSync(req.body.pass, data.pass);
    if(!name || pass === null) return res.json({error: 'faltan datos'});
    if(pass === false) return res.json({error: 'ningún usuario coincide con usuario y contraseña'});
    else res.status(200).json({sucess: "usuario logeado correctamente", token: createToken(data)})
    return data;
    }catch(error){
        console.error(error);
        res.status(500).send({message: 'Ha ocurrido un problema con el login'});
    }
};