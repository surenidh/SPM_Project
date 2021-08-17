const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registration-controller');

router.post('/add',registrationController.AddUsers);




module.exports = router;