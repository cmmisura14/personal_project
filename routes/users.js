var express = require('express');
var router = express.Router();
var Users = require('../models/user');
var passport = require('passport');
var path = require('path');

//router.get('/', function(req, res, next){
//    Users.find(function(err, users){
//        if(err) return next(err);
//        res.json(users);
//    });
//});

router.get('/', function(req, res){
    console.log(Users);
    console.log('got here');
    if(req.isAuthenticated() && req.user.username === 'test'){
        console.log('You are logged in as an admin');
        res.sendFile(path.resolve(__dirname, "../public/views/admin.html"));
    } else if(req.isAuthenticated()){
        console.log('You are logged in');
        res.sendFile(path.resolve(__dirname, "../public/views/user.html"));
    } else {
        console.log('Nice try');
        res.sendFile(path.resolve(__dirname, "../views/index.html"));
    }
});

//router.post('/', passport.authenticate('local'), function(req, res, next){
//    Users.create(req.body, function(err, post){
//        if(err)
//            return next(err);
//        res.json(post);
//    });
//});

console.log('users loaded');
module.exports = router;
