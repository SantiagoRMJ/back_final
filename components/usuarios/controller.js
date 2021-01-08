const User = require('./model');
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
        const nuevoUsuario = await User.create({
            name: req.body.name,
            pass: req.body.pass,
            email: req.body.email,
            rol: req.body.rol
        });
       
        res.status(200).json({message: 'Usuario creado correctamente', nuevoUsuario:nuevoUsuario});
    } catch (error) {
        res.status(500).send({message: 'El usuario no ha podido crearse correctamente'});
    }
};

exports.login = async (req, res)=>{
    try{
    const name = req.body.name;
    let data = await User.findOne({email: req.body.email});
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