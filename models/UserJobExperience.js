const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const workExperienceSchema = new Schema ({
    jobTitle:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true,
    },
    time:{
        type:Date,
        required:true
    },
    //what were you doing at this job
    description:{
        type:String,
        required:true
    }


});

const UserjobExperienct = new Schema({
    work:[
        workExperienceSchema
    ]
});

module.exports = mongoose.model("userWorkExperience",UserjobExperienct);


