var express = require('express');
var app     = express();


// The listened port
var port = process.env.PORT || 3000;

// Serve static files (css, js, images)
app.use(express.static('public'));
// Set the template engine to jade
app.set('view engine', 'jade');
// Set the views folder to ./views
app.set('views', './views');

//require all routes, index.js is called by default
require('./scripts/router')(app);

module.exports = app;
