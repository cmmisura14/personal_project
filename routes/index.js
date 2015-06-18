var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var User = require('../models/user');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '../views/index.html'));
});

router.post('/', passport.authenticate('local', {
    successRedirect: '/users',
    failureRedirect: '/'
    })
);



console.log('index loaded');
module.exports = router;
