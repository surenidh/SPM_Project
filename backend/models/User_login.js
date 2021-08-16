const mongoose = require('mongoose');

const UserLoginSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', UserLoginSchema);