const mongoose = require('mongoose');

const SheetSchema = new mongoose.Schema({
    ////////// FILTER /////////////

    subject:{
        type: String,
    },
    grade:{
        type: String
    },
    area:{
        type: String
    },

    ///////// CREATE ////////////

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

    /////////// RESOLVE ///////////

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