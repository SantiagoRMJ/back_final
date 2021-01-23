const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({    
    name:{
        type: String,
        required: true,
    },
    pass:{
        type: String,
        required: true,
        select: false
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    class: { type: String },

    
})

module.exports = mongoose.model('Student', StudentSchema)