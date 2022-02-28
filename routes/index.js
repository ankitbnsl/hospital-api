const express= require('express');
const router = express.Router();

// Create a router which redirects on bases of request url
router.use('/doctors',require('./doctors'));
router.use('/patients',require('./patients'));
router.get('/reports/:status',require('../controllers/report-controller').reportDetails);

// Export router
module.exports =router;