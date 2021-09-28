const mongoose = require('mongoose');

const UploadPosts = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    image:{
        type: String,
    },
    description:{
        type: String,
        reuired: true
    },
    url:{
        type: String,
    }
},{
    collection:'uploadposts'
});

module.exports = mongoose.model('UploadPosts',UploadPosts);