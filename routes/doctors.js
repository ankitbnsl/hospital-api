const express= require('express');
const router = express.Router();
// Router to handle request starting with /doctors
// on /register call create function , on /login call login function present in doctor-controller file
router.post('/register',require('../controllers/doctor-controller').create);
router.post('/login',require('../controllers/doctor-controller').login);

module.exports =router;