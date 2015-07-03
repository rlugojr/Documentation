var express = require('express'),
    router = express.Router();

var fs = require('fs');

var marked_github   = require('meta-marked');
marked_github.setOptions({
    renderer: new marked_github.Renderer(),
    gfm: true,
    tables: true,
    breaks: true,
    sanitize: false
});

// PAGE WHATS NEW
router.get('/whats-new', function(req, res){

    fs.readFile('./content/whats-new/whats-new.md', {"encoding" : "utf-8", "flag" : "r"}, function(err, data){
        if (err) throw err;

        html = marked_github(data).html;

        // render the page
        res.render('whats-new', {content : html, currentUrl: "/whats-new"});
    });
});

// PAGE EXTENSIONS
router.get('/extensions', function(req, res){
    // render the page
    res.render('extensions/extensions');
});

// PAGE EXTENSIONS
router.get('/exporters', function(req, res){
  // render the page
  res.render('exporters/exporters');
});

// DEFAULT PAGE
router.get('/', function (req, res) {
    res.render('index', {currentUrl:'/'});
});

module.exports = router;