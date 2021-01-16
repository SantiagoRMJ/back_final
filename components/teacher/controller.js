const Teacher = require('./model');
const bcrypt = require('bcryptjs');


exports.register = async (req, res) => {
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
       
        res.status(200).json({message: 'Usuario creado correctamente', newTeacher: newTeacher});
    } catch (error) {
        res.status(500).send({message: 'El usuario no ha podido crearse correctamente'});
    }
};

