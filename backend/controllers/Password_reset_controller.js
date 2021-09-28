const { Passoword } = require("../models/resetPassword_model");

const AddDetails = async (req, res, next) => {
  let password = new Passoword(req.body);
  await password
    .save()
    .then((password) => {
      res.status(200).json({ patient: "Password reset succesfully" });
    })
    .catch((err) => {
      res.status(400).send("unable to save database");
    });
};
module.exports = {
    AddDetails,
  };
  