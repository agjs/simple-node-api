var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/simple-node-api');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to mongoDB');
});