const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const educationSchema = new Schema({
    degree:{
        type:String,
        required:true
    },
    fieldofStude:{
        type:String,
        required:true
    },
    school:{
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
    }
});


module.exports = mongoose.model("userEducation",educationSchema);