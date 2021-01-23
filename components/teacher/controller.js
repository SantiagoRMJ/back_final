const Teacher = require('./model');
const bcrypt = require('bcryptjs');


exports.register = async (req, res) => {   
    try {
        const data = req.body;
        const newTeacher = await Teacher.create({
            name: data.name,
            pass: bcrypt.hashSync(data.pass, 3),
            email: data.email,
            classes: data.classes,
            grade: data.grade,
            subject: data.subject,
            
        });
       
        res.status(200).json({message: 'Usuario creado correctamente', newTeacher: newTeacher});
    } catch (error) {
        res.status(500).json({message: 'El usuario no ha podido crearse correctamente'});
    }
};

exports.searchTeacherByGrade = async (req, res) =>{
    try{
        const teacherInGrade = await Teacher.find({ grade: req.body.grade})
        res.status(200).json({teacherInGrade: teacherInGrade})
    }catch(error){
        res.status(500).json({message: 'no se ha encontrado ningún profesor'});
    }
}