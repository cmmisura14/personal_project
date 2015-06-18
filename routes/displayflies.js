var express = require('express');
var router = express.Router();
var path = require('path');
var Flies = require('../models/flies');
var mongoose = require('mongoose');

router.get('/', function(req, res, next){
    Flies.find(function(err, data){
        res.json(data);
    })

});

//router.get('/search/:name', function(req, res, next){
//  Flies.find({name: new RegExp (req.params.name, 'i') }, function (err, flies) {
//    if (err) return next(err);
//    res.json(flies);
//  });
//});

//router.get('/search', function(req, res, next){
//
//    Flies.find({}, null, { sort: {number: 1}}
//        ,function (err, flies) {
//            if (err) return next(err);
//            res.json(flies);
//        });
//});

console.log('Display flies route loaded');
module.exports = router;