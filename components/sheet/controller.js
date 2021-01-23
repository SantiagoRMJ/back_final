const Sheet = require('./model');
const Teacher = require('../teacher/model')

exports.createSheet = async (req,res) => {
    try{
        const newSheet = await Sheet.create({
            subject: req.body.subject,
            grade: req.body.grade,
            area: req.body.area,
            title: req.body.title,
            questions: req.body.questions,
            teacher: req.body.teacher
        })
        res.status(200).json({message: 'Ficha creada correctamente', newSheet: newSheet});
    }catch (error) {
        res.status(500).send({message: 'La ficha no ha podido crearse correctamente.', error: error});
    }
};

exports.getAllSheets = async (req,res) => { 
    try{
    const sheets = await Sheet.find({});
    res.status(200).json(sheets);
    } catch (error){
        res.status(500).send({message: 'Ha ocurrido un problema listando las fichas', error: error});
    } 
};


exports.resolveSheet = async (req, res) => {
    try{
        const resolvedSheet = {
            id: req.body.id,
            answers: req.body.answers
        }
        res.status(200).json(resolvedSheet);
    }catch(error){
        res.status(500).send({message: 'Ha ocurrido un problema al enviar la ficha', error: error})
    }
};

exports.removeSheet = async (req, res) => {
    try{
        const sheet = await sheet.deleteOne({id: req.body.id})
        res.status(200).json({message: 'La ficha ha sido eliminada'})
    }catch(error){
        res.status(500).send({message: 'No se ha podido eliminar la ficha', error: error})
    }
};
exports.sendSheet =  async (req, res) => {
    try{
        const teacher = await Teacher.findOne({id: req.body.id})
        const data = req.body;
        
        const promises = teacher.students.map(student_id =>{
            return Sheet.create({
                student: student_id,
                subject: data.subject,
                grade: data.grade,
                area: data.area,
                title: data.title,
                questions: data.questions,
                teacher: data.teacher
            })
        })
        await Promise.all(promises);
        res.status(200).json({message: 'fichas enviadas correctamente', collection: idCollection})
        }catch(error){
            console.log(error)
            res.status(500).send({message: 'no se han podido enviar las fichas', error: error})
        }
    }
    exports.findSheet = async (req, res) =>{
        try{
            const sheet = await Sheet.findOne({id: req.params.id})
            res.status(200).json({sheet: sheet})
        }catch(error){
            console.log(error)
            res.status(500).json({message: 'no se ha podido encontrar la ficha'})
        }
        
    }
    
