const Doctor = require('../models/doctor-model');
const jwt = require('jsonwebtoken');

// create function to create new doctor
module.exports.create= async function(req,res){
    
         try{ 
            if(!req.body.username || !req.body.password){
                return res.json(500,{
                    message:"Name or password missing "
                });
              } 
             // find if doctor with same username is already registered or not , if not then register
             const doc = await Doctor.findOne({username: req.body.username});
             
             if(!doc){
                 // create new doctor and return json data of doctor created
                 const doctor = await Doctor.create(req.body);
                 
                 return res.json(200,{
                    message:"Doctor created successfully",  
                    data:{ doctor }
                });

             }else{
                 return res.send("ALready registered with this username , try with other username")
             }

         }catch(err){
             console.log("Error in creating doctor");

               // if error occur , return json data and pass error message in that
             return res.json(500,{
                message:"Error in creating doctor"
            });
         }
    
}

// login function to login the already registers doctor
module.exports.login = async function(req,res){
    try{
        if(!req.body.username || !req.body.password){
            return res.json(500,{
                message:"Name or password missing "
            });
          } 
       let doctor = await  Doctor.findOne({username : req.body.username});
                // if doctor doesnt exist with the requested username or password dont match , pass invalid credentials
                  if(!doctor || doctor.password != req.body.password){
                    return res.json(422,{
                        message:"Invalid user name or password"
                    });
                  }      
             // if doctor found with request username and its password matches with stored doctor details , then return ,
             // json data in which pass message as doctor is logged in , also pass jwt token 
                  return res.json(200,{
                    message:"Sign-in Successfully",  
                    data:{  token : jwt.sign(doctor.toJSON() , 'this is secret', {expiresIn:100000}) }
                });
        
          
    }catch(err){
        Console.log("error");

          // if error occur , return json data and pass error message in that
        return res.json(500,{
            message:"Internal server error"
        });
    }
}


