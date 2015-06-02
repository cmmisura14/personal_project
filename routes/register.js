var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var Users = require('../models/user');

router.post('/', function(req, res, next){
    Users.create(req.body, function(err, post){
        if(err) next(err);
        res.json(post);
    })
});

console.log('register loaded');
module.exports = router;