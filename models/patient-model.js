// Create schema of doctor , it has two arguments name and phone_number
const mongoose= require('mongoose');
const patientSchema = mongoose.Schema({
    name : {type:String , required:true} ,
    phone_number : {type:Number , required:true}
});


const patient = mongoose.model('patient',patientSchema);
module.exports = patient;