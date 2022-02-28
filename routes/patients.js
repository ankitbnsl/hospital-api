const express= require('express');
const router = express.Router();
const passport = require('passport');

// Router to handle request starting with /patients
// on /register call create function in patient-controller file
router.post('/register',require('../controllers/patient-controller').create);

//  on /:id/create-report , first authenticate jwt token then call createReport function in patient-controller file
router.post('/:id/create-report',passport.authenticate('jwt',{session:false}),require('../controllers/patient-controller').createReport);

//  on /:id/all-reports ,  call allReports function in patient-controller file
router.get('/:id/all-reports',require('../controllers/patient-controller').allReports);
module.exports =router;