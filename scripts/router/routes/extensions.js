
// ************************************************* REQUIRE *************************************************

var express = require('express'),
    router = express.Router(),
    path = require('path'),
    appRoot = require('app-root-path').path,
    logger = require(path.join(appRoot, 'config/logger'));


// ************************************************* CLASSES *************************************************


/**
 * Show the extensions list
 */
router.get('/', function(req, res) {
    var options = {
        root: path.join(appRoot, 'public/html')
    };

    res.status(200);
    res.set({
        'Content-type':'text/html',
        'Cache-Control': 'no-cache'
    });
    res.sendFile('./extensions.html', options);
});

router.get('/:extension', function(req, res){
    var options = {
        root: path.join(appRoot, 'public/html')
    };

    var extension = req.params.extension;

    res.status(200);
    res.set({
        'Content-type':'text/html',
        'Cache-Control': 'no-cache'
    });
    res.sendFile('./extensions/'+ extension +'.html', options);
});

module.exports = router;


// ************************************************* FUNCTIONS *************************************************
