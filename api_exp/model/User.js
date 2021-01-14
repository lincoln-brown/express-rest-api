const mongoose = require('mongoose');
 const userschema = new mongoose.Schema({
     name:{
         type:String,
         required: true,
         min: 6,
         max: 255
     },
     password:{
         type:String,
         required:true,
         max:500,
         min:8
     },
     email:{
         type:String,
         required:true,
         max:255,
         min:10
     },
     date:{
         type:Date,
         default:Date.now,
     }

 });

 module.exports= mongoose.model('User',userschema);