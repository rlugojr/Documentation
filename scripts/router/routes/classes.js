/*************************************************************************
 *                             REQUIREMENTS                              *
 ************************************************************************/

var express = require('express'),
    router = express.Router();

var fs = require('fs');
var path = require('path');

var marked_github   = require('meta-marked');
    marked_github.setOptions({
        renderer: new marked_github.Renderer(),
        gfm: true,
        tables: true,
        breaks: true,
        sanitize: false
    });

var logger = require('../../../config/logger');

var __publicRootPath = '../../../public';

/************************************************************************
 *                                ROUTES                                *
 ************************************************************************/

/**
 * Show the Classes list. No version specified so get the last version and redirect to it
 */
router.get('/', function(req, res) {
    classesListVersions(function(versions) {
        res.writeHead(301, {
            Location: (req.socket.encrypted ? 'https://' : 'http://') + req.headers.host + '/classes/' + versions[versions.length-1]
        });
        res.end();
    });
});

/**
 * Show the Classes list.
 * @param req
 *      version - The version of babylon
 */
router.get('/:version', function(req, res) {
    var version = req.params.version;

    fs.exists('public/html/classes_' + version + '.html', function(exists){
        if(exists){
            var options = {
                root: path.join(__dirname, __publicRootPath)
            };

            res.status(200);
            res.set({'Content-type':'text/html'});
            res.sendFile('./html/classes_' + version + '.html', options);
        } else {
            // render 404 - Page not found
            logger.error('404 error - Page not found: public/html/classes_' + version + '.html');
            res.render('errorpages/404.jade', {});
        }
    });
});

/**
 * Show the specified Class.
 * @param req
 *      name - Name of the Class
 *      version - The version of babylon
 */
router.get('/:version/:name', function(req, res) {
    var version         = req.params.version;
    var className       = req.params.name;
    className = className
        .replace('<', '_').replace('>', '_')
        .replace('%3CT%3E', '_T_')
        .replace('&lt;T$gt;', '_T_');

    // for internal forwarding (click on a link)
    if(className == 'page.php'){

        var pageID = req.query.p;

        res.writeHead(301, {
            Location: (req.socket.encrypted ? 'https://' : 'http://') + req.headers.host + '/forward/page.php?p=' + pageID
        });

        res.end();


    } else {
        var fileName = path.join('./public/html/class_' + version, className) + '.html';
        fs.exists(fileName, function(exists){
            if(!exists){
                // 404 class not found
                // render 404 - Class not found
                logger.error('404 error - File not found: '  + fileName);
                res.render('errorpages/404_class_not_found.jade', {classname:className});
            } else {
                fileName = path.join('./html/class_' + version, className) + '.html';

                var options = {
                    root: path.join(__dirname, __publicRootPath)
                };

                res.status(200);
                res.set({'Content-type':'text/html'});
                res.sendFile(fileName, options);
            }
        });
    }
});


module.exports = router;


/*************************************************************************
 *                               FUNCTIONS                               *
 ************************************************************************/

/**
 * Get all the versions
 * @returns {Array} - 'X.X'
 */
var classesListVersions = function(callback) {
    fs.readdir('./content/classes', function(error, data) {
        var versionsList = [];

        data.forEach(function(version) {
            // don't send the 'v' in 'vX.X'
            versionsList.push(version);
        });

        callback(versionsList);
    });
};