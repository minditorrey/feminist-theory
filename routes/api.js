'use strict';

var express = require('express');
var path = require('path');
var router = express.Router();

router.use('/posts', require('./posts'));


module.exports = router;