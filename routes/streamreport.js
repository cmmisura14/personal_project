var express = require('express');
var router = express.Router();
var path = require('path');
var Reports = require('../models/report');
var mongoose = require('mongoose');

router.get('/', function(req, res, next){
    Reports.find(function(err, data){
        res.json(data);
    })

});

console.log('Display Stream Reports route loaded');
module.exports = router;