// Create expresss server
const express= require('express');
const port=3000;
const app= express();

// to pass body of form data 
app.use(express.urlencoded());
// run passport startegy as a middleware
const passport_jwt = require('./config/passport-jwt-strategy');

// load mongoose middleware
const db = require('./config/mongoose');

app.use('/',require('./routes/index'));

 // Listen express server at port 3000
app.listen(port,function(req,res){
      console.log(`server is running at port ${port}`);
});
