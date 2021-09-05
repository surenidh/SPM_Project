const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const PatienteSchema =  mongoose.Schema({
    patient_name : {
        type:String
    },
    contactNo : {
        type:String
    },
    Email : {
        type:String
    },
    title : {
        type:String
    },
    question : {
        type:String
    }
},{timesamps:true},
{
    collection:'patients'
});

module.exports = mongoose.model('Patient', PatienteSchema);
