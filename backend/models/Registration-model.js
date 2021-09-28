const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let registrationSchema = new Schema({

    name : {

        type : String
    },

    contactdetails : {

        type : String
    },

    email : {

        type : String
    },

    password : {
        type : String
    },
    
    confirmPassword : {
        type : String
    }
   
},{
    timestamps:true
});

const Registration = mongoose.model('Registration',registrationSchema);
module.exports ={Registration}