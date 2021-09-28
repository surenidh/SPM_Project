const router = require("express").Router();
let AppointmentsView = require('../models/AppointmentsConsultant.js');


//view questions route
router.route("/viewAppointmentsConsultant").get((req,res) => {
    AppointmentsView.find().then((appointmentsView)=>{
       res.json(appointmentsView);
    }).catch((err) => {
        console.log(err);
    })
});

//select one question route
router.route('/appointmentsByID/:id').get(async (req,res) =>{
    try{
        const viewAppointments =   await AppointmentsView.findById(req.params.id);
        res.json(viewAppointments);
    }catch(err) {
        res.send('Error' +err);
    }
});

//reply
router.route('/replyAppointments/:id').get(async (req,res) =>{
    try{
const viewAppoinments =   await AppointmentsView.findById(req.params.id);
res.json(viewAppoinments);
    }catch(err) {
        res.send('Error' +err);
        

    }
});

module.exports = router;