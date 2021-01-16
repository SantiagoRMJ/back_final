const mongoose = require('mongoose');

const SheetSchema = new mongoose.Schema({

    ////////// FILTER (Teacher) ///////////

    subject: {type: String},
    grade: {type: String},
    area: {type: String},
    status: {
        type: Boolean,
        default: false
    },

    ///////// CREATE (Teacher) ////////////

    title: {type: String},
    
    questions: [{ type: String }],

    /////////// RESOLVE (Student) ///////////

    answers:[{ type: String }],

    /////////// RELATIONS ////////////

    student:{
        type: String,
        ref: 'Students'
    },
    teacher:{
        type: String,
        ref: 'Teachers'
    }
    
});

module.exports = mongoose.model('Sheet', SheetSchema);