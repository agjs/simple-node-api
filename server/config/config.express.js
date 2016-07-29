var express = require('express');
var bodyParser = require('body-parser');

module.exports = function(app) {

    app.use(express.static('../client'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
}