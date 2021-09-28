const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const templateSchema = mongoose.Schema(
  {
    doctor: {
      type: String,
    },

    email: {
      type: String,
    },

    url: {
      type: String,
    },

  },
  { timesamps: true }
);

const Template = mongoose.model('Template', templateSchema);

module.exports = { Template };
