var express = require('express');
var router = express.Router();
var controller = require('./user.controller');


router.get('/', controller.getUsers)
    .post('/', controller.createUser)

module.exports = router;