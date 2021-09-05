const router = require("express").Router();
let Patient = require('../models/Add_patientModel.js');
let Posts = require('../models/upload_posts.js');

//view questions route
router.route("/viewQuestions").get((req,res) => {
    Patient.find().then((questions)=>{
        res.json(questions);
    }).catch((err) => {
        console.log(err);
    })
});

//select one question route
router.route('/viewQuestions/:id').get(async (req,res) =>{
    try{
const viewQuestion =   await Patient.findById(req.params.id);
res.json(viewQuestion);
alert("wow");
    }catch(err) {
        res.send('Error' +err);
    }
}) 

//reply
router.route('/reply/:id').get(async (req,res) =>{
    try{
const viewQuestion =   await Patient.findById(req.params.id);
res.json(viewQuestion);
    }catch(err) {
        res.send('Error' +err);
        

    }
}) 
module.exports = router;