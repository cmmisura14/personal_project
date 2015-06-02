var express = require('express');
var router = express.Router();
var path = require('path');
var Flies = require('../models/flies');

router.get('/', function(req, res, next){
    Flies.find(function(err, data){
        res.json(data);
    })

});

console.log('Display flies route loaded');
module.exports = router;