var express = require('express');
var router = express.Router();
var path = require('path');
var Reports = require('../models/report');

router.post('/', function(req, res, next){
    Reports.create(req.body, function(err, post){
        if(err) next(err);
        res.json(post);
    })
});

console.log('Post Stream Report loaded');
module.exports = router;