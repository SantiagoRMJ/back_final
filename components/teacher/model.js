const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({    
    name:{
        type: String,
        required: true,
    },
    pass:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    classes:{
        type: String
    },
    students: {
         type: String, 
         ref: 'Students' 
    },
    sheets:{
        type: String,
        ref: 'Sheets'
    },
    grade:{
        type: String
    },
    subject:{
        type: String
    }

})

module.exports = mongoose.model('Teacher', TeacherSchema)