const express = require('express');
const uploadPostRoutes = express.Router();

let UploadPosts = require('../models/upload_posts.js');

uploadPostRoutes.route('/add').post(function(req, res){
    let uploadpost = new UploadPosts(req.body);
    uploadpost.save().then(uploadpost =>{
        res.status(200).json({'uploadpost':'Post uploaded successfully'});
    }).catch(err => {
        res.status(400).send("unable to save data to database");
    });
});

//get data
uploadPostRoutes.route('/').get(function(req, res){
    UploadPosts.find(function (err, uploadpost){
        if(err){
            console.log(err);
        }else{
            res.json(uploadpost);
        }
    });
});

//edit
uploadPostRoutes.route('/edit/:id').get(function (req, res){
    let id = req.params.id;
    UploadPosts.findById(id, function(err, uploadpost){
        res.json(uploadpost);
    });
});

//update
uploadPostRoutes.route('/update/:id').post(function (req, res){
    UploadPosts.findById(req.params.id, function(err, uploadpost){
        if(!uploadpost)
            res.status(404).send("data is not found");
        else{
            uploadpost.title = req.body.title;
            uploadpost.image = req.body.image;
            uploadpost.description = req.body.description;
            uploadpost.url = req.body.url;

            uploadpost.save().then(uploadpost =>{
                res.json('Update has completed');
            }).catch(err =>{
                res.status(400).send("unable to update record");
            });
        }
    });
    
    });

    //delete
    uploadPostRoutes.route('/delete/:id').get(function (req, res){
        UploadPosts.findByIdAndDelete({_id:req.params.id}, function(err, uploadpost){
            if(err)res.json(err);
            else res.json('Successfully removed');
        });

    });

    module.exports = uploadPostRoutes;
