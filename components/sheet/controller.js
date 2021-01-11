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
        res.status(200).json({message: 'Ficha creada correctamente', nuevaFicha:newSheet});
    }catch (error) {
        res.status(500).send({message: 'La ficha no ha podido crearse correctamente.'});
    }
};