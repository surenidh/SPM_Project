const express = require('express');
const router = express.Router();
const passwordController = require('../controllers/Password_reset_controller');

router.post('/insert', passwordController.AddDetails);
module.exports = router;   