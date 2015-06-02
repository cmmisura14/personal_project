var express = require('express');
var router = express.Router();
var path = require('path');
var Flies = require('../models/flies');

router.post('/', function(req, res, next){
    Flies.create(req.body, function(err, post){
        if(err) next(err);
        res.json(post);
    })
});

console.log('Submit Flies loaded');
module.exports = router;