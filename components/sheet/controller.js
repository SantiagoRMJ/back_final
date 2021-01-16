const Sheet = require('./model');

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
        res.status(200).json({message: 'Ficha creada correctamente', newSheet:newSheet});
    }catch (error) {
        res.status(500).send({message: 'La ficha no ha podido crearse correctamente.', error: error});
    }
};

exports.getAllSheets = async (req,res) => { 
    try{
    const sheets = await Sheet.find({});
    res.status(200).json(sheets)
    } catch (error){
        res.status(500).send({message: 'Ha ocurrido un problema listando las fichas', error: error});
    } 
};

exports.resolveSheet = async (req, res) => {
    try{
        const resolvedSheet = {
            answers: req.body.answers
        }
        res.status(200).json(resolvedSheet)
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