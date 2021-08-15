const mongoose = require('mongoose');

const uploadPostTemplate = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    image:{
        type: Image,
    },
    description:{
        type: String,
        reuired: true
    },
    url:{
        type: String,
    }
})

module.exports = mongoose.model('conselling', uploadPostTemplate);