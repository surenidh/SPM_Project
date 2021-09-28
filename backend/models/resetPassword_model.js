const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const PasswordSchema =  mongoose.Schema({
    Email : {
        type:String
    },
    password : {
        type:String
    },
    confirmPassword : {
        type:String
    }
},{timesamps:true})

const Passoword = mongoose.model('Password', PasswordSchema);

module.exports = {Passoword}
