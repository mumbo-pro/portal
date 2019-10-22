const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userAwards = new Schema (
    {
        title:{
            type:String,
            required:true
        },
        dateAwarded:{
            type:Date,
            required:true
        },
        desctription:{
            type:String,
            required:true
        }

    }
);



module.exports = mongoose.model("Userawards",userAwards);