const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
   name:String ,
   standard:String,
   rollNo:{
       type:Number,
       required:true,
       unique:true
   }
},{
    timestamps:true
});


module.exports = mongoose.model('student',studentSchema);