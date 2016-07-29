var express = require('express');
var app = express();
var variables = require('./config/variables.express');

require('./config/mongoose.connection');
require('./config/config.express')(app);
require('./config/routes.express')(app);

// this is our http server
app.listen(variables.EXPRESS_PORT, function() {
    console.log(variables.EXPRESS_LISTEN_MESSAGE + variables.EXPRESS_PORT);
});