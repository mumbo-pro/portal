const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  jobtitle: {
    type: String,
    required: true
  },
  jobtype: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  salary: {
    type: String,
    required: true
  },

  contacts: {
    type: String,
    required: false
  },
  deadline: {
    type: Date,
    required: true
  },
  vacancy: {
    type: Number,
    required: true
  },

  job_description: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('job', JobSchema);
