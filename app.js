var express         = require('express');
var app             = express();
var marked_github   = require('meta-marked');
var fs              = require('fs');

// The listened port
var port = process.env.PORT || 3000;


// Serve static files (css, js, images)
app.use(express.static('public'));
// Set the template engine to jade
app.set('view engine', 'jade');
// Set the views folder to ./views
app.set('views', './views');


app.use('/', require('./scripts/routes'));


// ERRORS

// Handle 404
app.use(function(req, res) {
    res.status(400);
    res.render('errorpages/404.jade', {});
});

// Handle 500
app.use(function(error, req, res, next) {
    res.status(500);
    res.render('errorpages/500.jade', {});
});


module.exports = app;
