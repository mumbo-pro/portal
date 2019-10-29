const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema ({
    profilepicture ={
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required:true,
        
    },
    middlename:{
        type:String,
        required:true
    },
    familyname:{
        type:String,
        required:true
    },
    DateofBirth:{
        type:Date,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    homeCity:{
        type:String,
        required:true,
    },
    workCity:{
        type:String,
        required:true
    },
    nationality:{
        type:String,
        required:true
    },
    workExperience:{
        type:Number,
    required:true
    },
    educationLevel:{
        type:String,
        required:true
    },
    jobCategory:{
        type:String,
        required:true
    },
    languagespoke:[
        {type:String,required:true}
    ],
    skills:[
        {type:String,required:true}
    ],
    //user introduce what kind of job or position is looking for
    summary:{
      type:String,
      required:true
    },



});

module.exports = mongoose.model("profile",ProfileSchema);
