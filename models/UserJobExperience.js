const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkExperienceSchema = new Schema({
  jobTitle: {
    type: String,
    required: true
  },
  company: {
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
  },
  description: {
    type: String,
    required: true
  }
});

const UserjobExperienct = new Schema({
  work: [workExperienceSchema]
});

module.exports = mongoose.model('UserWorkExperience', WorkExperienceSchema);
