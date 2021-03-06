const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSocialProfile = new Schema({
  twitter: {
    type: String,
    required: false
  },
  facebook: {
    type: String,
    required: false
  },
  linkedin: {
    type: String,
    required: false
  },
  instagram: {
    type: String,
    required: false
  },
  pinterest: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('social_profile', UserSocialProfile);
