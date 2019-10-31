const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserAwards = new Schema({
  title: {
    type: String,
    required: true
  },
  date_awarded: {
    type: Date,
    required: true
  },
  desctription: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('user_awards', UserAwards);
