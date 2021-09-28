const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AppointmentsConsultant = new Schema({

    name : {

        type : String
    },

    date : {

        type : Date
    },

    type : {

        type : String
    },

    contactnumber : {
        type : Number
    },
    
    email : {
        type : String
    }
    },{timesamps:true},
    {
        collection:'addappoinments'
    });
    

module.exports = mongoose.model('addappoinments',AppointmentsConsultant);
