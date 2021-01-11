const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({    
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
    class:{
        type: String,
    },
    teachers: {
         type: String, 
         ref: 'Teachers' 
    },
    sheets:{
        type: String,
        ref: 'Sheets'
    },
    
})

module.exports = mongoose.model('Student', StudentSchema)