const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const JobSchema = new Schema({
  jobtitle: {
    type: String,
    required: true
  },
  //fulltime ,parttime.....
  jobtype:{
 type:String,
 required:true
  },
  city:{
    type:String,
    required:true
  },
  //type is string because some jobsprovider do not provide the value until the negotiation
  salary:{
    type:String,
    required:true
  },

  contacts:{
    type:String,
    required:false
  },
  deadline:{
    type:Date,
    required:true
  },
  vacancy:{
    type:Number,
    required:true
  },

  JobDescription:{
    type:String,
    required:true
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model('job', JobSchema);
