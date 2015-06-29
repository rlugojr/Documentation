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


marked_github.setOptions({
    renderer: new marked_github.Renderer(),
    gfm: true,
    tables: true,
    breaks: true,
    sanitize: false
});

// WHAT'S NEW page
app.get('/whats-new', function(req, res){
    fs.readFile('./content/whats-new/whats-new.md', {"encoding" : "utf-8", "flag" : "r"}, function(err, data){
        if (err) throw err;

        html = marked_github.noMeta(data);

        // render the page
        res.render('whats-new', {content : html, currentUrl: "/whats-new"});
    });
});


// CLASSES PAGE
var routeClasses = require('./scripts/routes/classes.js');
app.get('/classes', routeClasses.showClasses );
app.get('/classes/:version', routeClasses.showClassesVersion );
app.get('/classes/:version/:name', routeClasses.showClassVersionName );


// DEFAULT PAGE
app.get('/', function (req, res) {
  res.render('index', {currentUrl:'/'});
});


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
