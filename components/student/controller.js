const Student = require('./model');
const bcrypt = require('bcryptjs');
const teacherController = require('../teacher/controller')


exports.register = async (req, res) => {
    req.body.pass = bcrypt.hashSync(req.body.pass, 3);    
    try {
        const newStudent = await Student.create({
            name: req.body.name,
            pass: req.body.pass,
            email: req.body.email,
            class: req.body.class
        });
        console.log(newStudent)
        await teacherController.classUpdate(req.body.class);
        res.status(200).json({message: 'Usuario creado correctamente', newStudent: newStudent});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'El usuario no ha podido crearse correctamente'});
    }
};
exports.showStudentsByClass = async (req, res) =>{
    const students = await Student.find({class: req.params.class});
    res.json({students: students})
}

