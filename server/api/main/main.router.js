var express = require('express');
var router = express.Router();
var controller = require('./main.controller');

router.get('/', controller.getRoot);

module.exports = router;