const {Registration} = require ('../models/Registration-model');

const AddUsers = async(req,res,next)=>{

   

    let registration = new Registration(req.body);
    registration.save()
            .then(registration=>{
                res.status(200).json({'registration':'User details are added successfully'});

            })
            .catch(err=>{
                res.status(400).send("Unable to save to database");
            });
}

exports.AddUsers=AddUsers;