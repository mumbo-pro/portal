const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserEducationSchema = new Schema({
  level: {
    type: String,
    required: true
  },
  field_of_study: {
    type: String,
    required: true
  },
  school: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('UserEducation', UserEducationSchema);
