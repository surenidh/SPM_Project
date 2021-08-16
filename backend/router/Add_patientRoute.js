const express = require('express');
const router = express.Router();
const patientController = require('../controllers/Add_patientController');

router.post('/add', patientController.AddDetails);
router.get('/', patientController.getDetails);
router.get('/edit/:id', patientController.editDetails);
router.post('/update/:id', patientController.updateDetails);
router.post('/delete/:id', patientController.deleteDetails);
module.exports = router;