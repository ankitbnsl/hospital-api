var mongoose= require('mongoose');

// create a mongodb connection
mongoose.connect(`mongodb://localhost/hospital-api`); 
var db= mongoose.connection;

// if error occur console error , if connection is successfull then console sucessfull connection
db.on('error',console.error.bind(console,'error'));

db.once('open',function(){
    console.log("connection sucessfull");
})

module.exports=db;