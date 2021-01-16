const Student = require('./model');
const bcrypt = require('bcryptjs');


exports.register = async (req, res) => {
    req.body.pass = bcrypt.hashSync(req.body.pass, 3);    
    try {
        const newStudent = await Student.create({
            name: req.body.name,
            pass: req.body.pass,
            email: req.body.email,
            class: req.body.class
        });
       
        res.status(200).json({message: 'Usuario creado correctamente', newStudent: newStudent});
    } catch (error) {
        res.status(500).send({message: 'El usuario no ha podido crearse correctamente'});
    }
};

