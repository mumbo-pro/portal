const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserProfileSchema = new Schema({
  profile_picture: {
    type: String,
    required: true
  },
  first_name: {
    type: String,
    required: true
  },
  middle_name: {
    type: String,
    required: true
  },
  family_name: {
    type: String,
    required: true
  },
  date_of_birth: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  home_city: {
    type: String,
    required: true
  },
  work_city: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  workExperience: {
    type: Number,
    required: true
  },
  education_level: {
    type: String,
    required: true
  },
  jobCategory: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  languagespoke: [{ type: String, required: true }],
  skills: [{ type: String, required: true }]
});

module.exports = mongoose.model('user_profile', UserProfileSchema);
