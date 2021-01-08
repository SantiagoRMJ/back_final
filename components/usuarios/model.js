const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({    
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
    rol:{
        type: String,
        default: 'USER',
        enum: ['ADMIN', 'USER']
    }
})

module.exports = mongoose.model('User', UserSchema)