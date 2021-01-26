const Sheet = require('./model');
const Teacher = require('../teacher/model');

exports.createSheet = async (req,res) => {
    try{
        const newSheet = await Sheet.create({
            subject: req.body.subject,
            grade: req.body.grade,
            area: req.body.area,
            title: req.body.title,
            questions: req.body.questions,
            teacher: req.body.teacher
        });
        res.status(200).json({message: 'Ficha creada correctamente', newSheet: newSheet});
    }catch (error) {
        res.status(500).json({message: 'La ficha no ha podido crearse correctamente.', error: error});
    };
};

exports.getAllSheets = async (req,res) => { 
    try{
    const sheets = await Sheet.find({});
    res.status(200).json(sheets);
    } catch (error){
        res.status(500).json({message: 'Ha ocurrido un problema listando las fichas', error: error});
    };
};


exports.resolveSheet = async (req, res) => {
    try{
        const sheet = await Sheet.findOne({_id: req.params.id})
        const resolvedSheet = {
            answers: req.body.answers
        }
        await sheet.updateOne({status:true , answers: resolvedSheet.answers})
        await sheet.save()
        console.log(sheet)
        res.status(200).json(resolvedSheet);
    }catch(error){
        console.log(error)
        res.status(500).json({message: 'Ha ocurrido un problema al enviar la ficha', error: error});
    };
};

exports.removeSheet = async (req, res) => {
    try{
        const sheet = await Sheet.findOne({_id: req.params.id});
        await Sheet.deleteOne(sheet);
        res.status(200).json({message: 'La ficha ha sido eliminada'});
    }catch(error){
        console.log(error)
        res.status(500).json({message: 'No se ha podido eliminar la ficha', error: error});
    };
};
exports.sendSheet =  async (req, res) => {
    try{
        const teacher = await Teacher.findOne({ _id: req.body.teacher });
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
            });
        });
        await Promise.all(promises);
        res.status(200).json({message: 'fichas enviadas correctamente', sheets: promises});
        }catch(error){
            console.log(error)
            res.status(500).json({message: 'no se han podido enviar las fichas', error: error});
        };
    };
    exports.findSheet = async (req, res) => {
        try{
            const sheet = await Sheet.find({student: req.params.id});
            res.status(200).json({sheet: sheet});
        }catch(error){
            res.status(500).json({message: 'no se ha podido encontrar ninguna ficha'});
        };   
    };
    exports.findStudentSheets = async (req, res) => {
        try{
            const sheets = await Sheet.find({student: req.params.id})
            console.log("ESTUDIANTES",sheets)
            res.status(200).json({sheet: sheets})
        }catch(error){
            console.log(error)
            res.status(200).json({message: 'no se ha encontrado ninguna ficha'})
        }
    }
    
    
