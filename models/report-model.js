// Create schema of report , it has 3 arguments doctor , status and patient , both doctor and status are of string type, but
// patient is object type which refer to patient model

const mongoose= require('mongoose');
const reportSchema = mongoose.Schema({
    doctor : {type:String , required:true } ,
    status : {type:String , required:true },
    patient : {type : mongoose.Schema.Types.ObjectId , ref:'patient'}
},{timestamps : true});


const report = mongoose.model('report',reportSchema);
module.exports = report;