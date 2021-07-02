const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Admin = new mongoose.Schema({

    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
  
});

module.exports=mongoose.model("Admin",Admin,"Admin");
