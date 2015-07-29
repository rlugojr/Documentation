
// ************************************************* REQUIRE *************************************************

var express = require('express'),
    router = express.Router(),
    path = require('path'),
    appRoot = require('app-root-path').path,
    logger = require(path.join(appRoot, 'config/logger'));


// ************************************************* CLASSES *************************************************


/**
 * Show the tutorial list
 */
router.get('/', function(req, res) {
    var options = {
        root: path.join(appRoot, 'public/html')
    };

    res.status(200);
    res.set({
        'Cache-Control': 'no-cache',
        'Content-type':'text/html'
    });
    res.sendFile('./tutorials.html', options);
});

router.get('/:tutorial', function(req, res){
    var options = {
        root: path.join(appRoot, 'public/html')
    };

    var tutorial = req.params.tutorial;

    res.status(200);
    res.set({
        'Cache-Control': 'no-cache',
        'Content-type':'text/html'
    });
    res.sendFile('./tutorials/'+ tutorial +'.html', options);
});

module.exports = router;


// ************************************************* FUNCTIONS *************************************************
