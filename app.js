var express  = require('express');
var app      = express();
var compress = require('compression');


// The listened port
var port = process.env.PORT || 3000;

app.use(compress());

// Serve static files (css, js, images)
app.use(express.static('public'));
// Set the template engine to jade
app.set('view engine', 'jade');

//app.set('view cache', true);
// Set the views folder to ./views
app.set('views', './views');

//require all routes, index.js is called by default
require('./scripts/router')(app);

module.exports = app;
