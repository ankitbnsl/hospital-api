const Patient = require('../models/patient-model');
const Report = require('../models/report-model');
const Doctor = require('../models/doctor-model')

// Used to create new patient
module.exports.create= async function(req,res){
    
         try{
              if(!req.body.name || !req.body.phone_number){
                return res.json(500,{
                    message:"Name or phone number missing "
                });
              } 
              var len =req.body.phone_number.toString().length;
              if(len!=10){
                return res.json(500,{
                    message:"Enter 10 digit phone number"
                });
              } 
            

             
             const pat = await Patient.findOne({phone_number: req.body.phone_number});
             
             // if patient is not already registered with the phone no. then register and pass json data of created patient
             if(!pat){
                 const patient = await Patient.create(req.body);
                 
                 return res.json(200,{
                    message:"Patient created successfully",  
                    data:{ patient }
                });
             }else{
                 // id already registerd , then message it is already registerd with the details of patient
                 return res.json(200,{
                    message:"ALready registered with this number",  
                    data:{ pat }
                });
             }

         }catch(err){
             console.log("Error in creating patient");
            // if error occur , return json data and pass error message in that
             return res.json(500,{
                message:"Error in creating patient"
            });
         }
    
}

// Use to create report of patient ,  if the doctor is login , then only this function is called
module.exports.createReport= async function(req,res){
    try{   
        
        if(!req.body.status){
            return res.json(500,{
            message:"Enter report status first",  
        });
            }
        // create report with doctor details , status and patient 
        const report =await  Report.create({doctor : req.user.username ,status: req.body.status ,  patient : req.params.id});
            // return the report as json data
        return res.json(200,{
            message:"Report created successfully",  
            data:{ report }
        });


    }catch(err){
        // if error occur , return json data and pass error message in that
        return res.json(500,{
            message:"Error in creating report"
        });
    }
}

// It is used to fetch all report related to particular patient
module.exports.allReports= async function(req,res){
    try{ 
        // fetch reports which has pateient id same as requested patient id
        const reports = await Report.find({patient : req.params.id}).populate('patient');
        
        // pass all reports fetched as json data
        return res.json(200,{
            message:"Patient all reports found successfully",  
            data:{ reports }
        });


    }catch(err){
        // if error occur , return json data and pass error message in that
        return res.json(500,{
            message:"Error in creating report"
        });
    }
}