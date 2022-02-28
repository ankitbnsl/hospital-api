// Create schema of doctor , it has two arguments username and password both are of string type
const mongoose= require('mongoose');
const doctorSchema = mongoose.Schema({
    username : {type:String , required:true } ,
    password : {type:String , required:true}
});

const doctor = mongoose.model('doctor',doctorSchema);
module.exports = doctor;