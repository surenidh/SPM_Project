import express, { request, response } from  'express';
import Home from '../components/Home';
import Login from '../components/login.js';

const router = express.Router();
const uploadPostTemplate  =  require('../models/upload_posts');

router.post('/uploadposts', (request, response) => {
    const uploadPosts = new uploadPostTemplate({
        title: request.body.title,
        image: request.body.image,
        description: request.body.description,
        url: request.body.url
    })
    uploadPosts.save().then(data =>{
        response.json(data)
    }).catch(error =>{
        response.json(error)
    })
})


router.post('/login', require('../../frontend/src/components/login.js'));

module.exports = router;