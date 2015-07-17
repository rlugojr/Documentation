
// ************************************************* REQUIRE *************************************************

var express = require('express'),
    router = express.Router(),
    path = require('path'),
    appRoot = require('app-root-path').path,
    logger = require(path.join(appRoot, 'config/logger'));

// ************************************************* CLASSES *************************************************


/**
 * Show the exporters list
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
    res.sendFile('./exporters.html', options);
});

router.get('/:exporter', function(req, res){

});

module.exports = router;


// ************************************************* FUNCTIONS *************************************************
