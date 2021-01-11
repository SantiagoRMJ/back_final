const mongoose = require('mongoose');

const SheetSchema = new mongoose.Schema({
    
    ////////// FILTER (Teacher) ///////////

    subject:{
        type: String,
    },
    grade:{
        type: String
    },
    area:{
        type: String
    },

    ///////// CREATE (Teacher) ////////////

    title:{
        type: String
    },
    firstQuestion:{
        type: String
    },
    secondQuestion:{
        type: String
    },
    thirdQuestion:{
        type: String
    },
    fourthQuestion:{
        type: String
    },
    fifthQuestion:{
        type: String
    },

    /////////// RESOLVE (Student) ///////////

    firstAnswer:{
        type: String
    },
    secondtAnswer:{
        type: String
    },
    thirdAnswer:{
        type: String
    },
    fourthAnswer:{
        type: String
    },
    fifthAnswer:{
        type: String
    },
});

module.exports = mongoose.model('Sheet', SheetSchema)