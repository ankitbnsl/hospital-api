const Report = require('../models/report-model');

// It is called to reports with specific status
module.exports.reportDetails= async function(req,res){
    try{ 
        // find report with the status that is given in url params and also popluate patient details from reports , 
        //to show patient detail as well in reports 
        const reports = await Report.find({status : req.params.status}).populate('patient');
        
        // return report data as json
        return res.json(200,{
            message:`All Reports  with ${req.params.status} status fetched successfully` ,  
            data:{ reports }
        });
        

    }catch(err){
          // if error occur , return json data and pass error message in that
        return res.json(500,{
            message:"Error in fetching reports with this status"
        });
    }
}

