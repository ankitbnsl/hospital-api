// passport jwt startegy , used to authenticate if the user is log in or not
const passport=require('passport');
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

const Doctor= require('../models/doctor-model');
var opts = {}
// extract token from header
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'this is secret';

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    // find doctor with the id achieved from auth token , if found return done(null, doctor)
    Doctor.findById(jwt_payload._id, function(err, doctor) {
        if (err) {
            return done(err, false);
        }
        if (doctor) { 
            return done(null, doctor);
        } else {
            return done(null, false);
        }

    });
}));