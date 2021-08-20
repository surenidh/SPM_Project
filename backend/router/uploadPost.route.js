/* const express = require('express');
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
 */

const router = require("express").Router();
let Posts = require('../models/upload_posts.js');

//login
router.post("/login", async(req,res)=>
{
   try{
       const email = req.body.email;
       const password = req.body.password;

       const userEmail = await Register.findOne({email:email});
       if (userEmail.password === password){
           res.status(201).render("/view");
       }else{
           alert("error");
       }

   } catch(error){
       res.status(400).send("invalid Email");
   }
})

//add post route
router.route("/add").post((req,res)=>{
    const title = req.body.title;
    const image = req.body.image;
    const description = req.body.description;
    const url = req.body.url;

    const newPost = new Posts({
        title,
        image,
        description,
        url
    })

    newPost.save().then(()=>{
        res.json("Post Uploaded")
    }).catch((err) => {
        console.log(err);
    })
})

//view posts route
router.route("/view").get((req,res) => {
    Posts.find().then((posts)=>{
        res.json(posts);
    }).catch((err) => {
        console.log(err);
    })
})

//update posts route
router.route("/update/:id").put(async (req, res) => {
    let postId = req.params.id;
    const { title, image,description,url} = req.body;

    const updatePost = {
        title,
        image,
        description,
        url
    }

    const update = await Posts.findByIdAndUpdate(postId, updatePost).then(()=>{
        res.status(200).send({status:"Posts Updated"})
    }).catch((err) =>{
        res.status(500).send({status:"Error"})

    })

})

//delete route
router.route("/delete/:id").delete(async(req, res) => {
    let postId = req.params.id;

    await Posts.findByIdAndDelete(postId).then(()=>{
        res.status(200).send({status:"Post Deleted"})
    }).catch((err)=>{
        res.status(500).send({status:"Error occured"})

    })
})

//select one post route
router.route("/get/:id").get(async (req,res) =>{
    let postId = req.params.id;
    await Posts.findById(postId).then(() =>{
        res.status(200).json({success:true})
    }).catch((err) => {
        res.status(500).send({status:"Error occured"})
    })
})

module.exports = router;