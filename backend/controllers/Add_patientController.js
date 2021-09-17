<<<<<<< HEAD
const { Patient } = require("../models/Add_patientModel.js");
=======
const { Patient } = require("../models/Add_patientModel");
>>>>>>> origin/sanduni

const AddDetails = async (req, res, next) => {
  let patient = new Conference(req.body);
  await patient
    .save()
    .then((patient) => {
      res.status(200).json({ conference: "Patient Details added succesfully" });
    })
    .catch((err) => {
      res.status(400).send("unable to save database");
    });
};
const getDetails = async (req, res) => {
  await Patient.find(function (err, patient) {
    if (err) console.log(err);
    else {
      res.json(patient);
    }
  });
};
const editDetails = async (req, res) => {
  await Patient.findById(req.params.id, function (err, patient) {
    res.json(patient);
  });
};
const updateDetails = async (req, res) => {
  await Patient.findById(req.params.id, function (err, patient) {
    console.log(req.body);
    if (!patient) res.status(404).send("data is not found");
    else {
      patient.patient_name = req.body.patient_name;
      patient.contactNo = req.body.contactNo;
      patient.Email = req.body.Email;
      patient.title = req.body.title;
      patient.question = req.body.question;
      patient
        .save()
        .then((patient) => {
          console.log(patient);
          res.json(patient);
        })
        .catch((err) => {
          res.status(400).send("unable to update database ");
        });
    }
  });
};
const deleteDetails = async (req, res) => {
  await Patient.findByIdAndRemove(
    { _id: req.params.id },
    function (err, patient) {
      if (err) res.json(err);
      else res.json("successfully removed");
    }
  );
};
module.exports = {
  AddDetails,
  getDetails,
  editDetails,
  updateDetails,
  deleteDetails,
<<<<<<< HEAD
};
=======
};
>>>>>>> origin/sanduni
