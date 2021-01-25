const Teacher = require('./model');
const bcrypt = require('bcryptjs');
const Students = require('../student/model')


exports.register = async (req, res) => {   
    try {
        const data = req.body;
        const newTeacher = await Teacher.create({
            name: data.name,
            pass: bcrypt.hashSync(data.pass, 3),
            email: data.email,
            class: data.class,
            grade: data.grade,
            subject: data.subject,
            
        });
        
        await exports.classUpdate(data.class);
        res.status(200).json({message: 'Usuario creado correctamente', newTeacher: newTeacher});
    } catch (error) {
        console.log(error)
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
exports.showStudentsById = async (req, res) =>{
   try{
    const id = req.params.id
    const teacher = await Teacher.find({_id: id})
    const teacherStudents = teacher.students
    teacher.map(teacher =>{
        res.json({students: teacher.students})
    })
    console.log(teacher)
    res.status(200).json({TeacherStudents: teacherStudents })
   }catch(error){
       console.log(error)
   }
    
}
exports.classUpdate = async (c) => {
    try{

        const teachers = await Teacher.find({class: c});
        const students = await Students.find({class: c});
        console.log(teachers, students)
        const promises = teachers.map(async teacher =>{
            teacher.students = students.map(student =>{
                return student._id
            })
            await teacher.save()
        })
        await Promise.all(promises);       
    }catch(e){
        console.log(e)
    }
}
