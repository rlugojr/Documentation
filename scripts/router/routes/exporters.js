
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
        'Cache-Control': 'no-cache',
        'Content-type':'text/html'
    });
    res.sendFile('./exporters.html', options);
});

router.get('/:exporter', function(req, res){
    var options = {
        root: path.join(appRoot, 'public/html')
    };

    var exporter = req.params.exporter;

    res.status(200);
    res.set({
        'Cache-Control': 'no-cache',
        'Content-type':'text/html'
    });
    res.sendFile('./exporters/'+ exporter +'.html', options);
});

module.exports = router;


// ************************************************* FUNCTIONS *************************************************
