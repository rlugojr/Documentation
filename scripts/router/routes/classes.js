
// ************************************************* REQUIRE *************************************************

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

// ************************************************* CLASSES *************************************************


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
 *          version - The version of babylon
 */
router.get('/:version', function(req, res) {
    var exist = false;

    var version = req.params.version;
    classesListVersions(function(versions) {

        versions.forEach(function(number) {
            if(number == version) exist = true;
        });

        if(!exist) {
            res.writeHead(301, {
                Location: (req.socket.encrypted ? 'https://' : 'http://') + req.headers.host + '/classes/' + versions[versions.length-1]
            });
            res.end();
            return;
        }

        classesClassesByVersionOrderByAlpha(version, function(classListByAlpha){
            classesClassesByVersionOrderByTag(version, function(classListByTag){

                var data = {
                    currentUrl      : "/classes",
                    currentVersion  : version,
                    versions        : versions,
                    classListByAlpha: classListByAlpha,
                    classListByTag  : classListByTag
                };

                res.render('class/classes.jade', data);

            });
        });
    });
});

/**
 * Show the specified Class.
 * @param req
 *          name - Name of the Class
 *          version - The version of babylon
 */
router.get('/:version/:name', function(req, res) {
    var exist = false;

    // TODO Get the class markdown page and display it correctly
    var version = req.params.version;
    classesListVersions(function(versions) {

        versions.forEach(function(number) {
            if(number == version) {
                exist = true;
            }
        });

        if(!exist) {
            res.writeHead(301, {
                Location: (req.socket.encrypted ? 'https://' : 'http://') + req.headers.host + '/classes/' + versions[versions.length-1]
            });
            res.end();
            return;
        }
        exist = false;

        var className = req.params.name;

        classesClassesByVersionOrderByTag(version, function(classesList) {

            for(var category in classesList) {
                for(var bclass in classesList[category]) {
                    if(classesList[category][bclass].toUpperCase() == className.toUpperCase()) {
                        exist = true;
                        var categoryName = category;
                    }
                }
            }

            if(!exist) {
                logger.error('404 error - Class not found: '  + className);
                res.render('errorpages/404_class_not_found.jade', {classname:className});
                return;
            }

            fs.readFile(path.join('./content/classes', version, className) + '.md', {"encoding" : "utf-8", "flag" : "r"}, function(error, content){
                if (error){
                    logger.error('404 error - File not found: '  + path.join('./content/classes', version, className) + '.md');
                    logger.error(error);
                    res.render('errorpages/404_class_not_found.jade', {classname:className});
                }  else {
                    var data = {
                    currentUrl: "/classes",
                    currentVersion: version,
                    className: className,
                    categoryName: categoryName,
                    content: marked_github(content).html,
                    list: classesList
                  };

                  res.render('class/class.jade', data);
                }
            });
        });
    });
});


module.exports = router;


// ************************************************* FUNCTIONS *************************************************

/**
 * Get all the versions
 * @returns {Array} - 'vX.X'
 */
var classesListVersions = function(callback) {

    fs.readdir('./data/classes-tags', function(error, data) {
        var results = [];

        data.forEach(function(file) {
            results.push(file.substr(1));
        });

        callback(results);
    });
};

/**
 * Get all the tags / class list from a version
 * @param version - Version of babylon
 * @returns {*} - Array of tags / class ordered by tags
 */
var classesClassesByVersionOrderByTag = function(version, callback) {

    fs.readFile('./data/classes-tags/v' + version + '/tags.json', 'utf8', function(error, data) {
        callback(JSON.parse(data));
    });
};

var classesClassesByVersionOrderByAlpha = function(version, callback){
    var classList = [];

    fs.readdir(path.join('./content/classes/', version), function(err, data){
        data.forEach(function(className){
            className = className.replace('.md', '');
            classList.push(className);
        });

        callback(classList);
    });
};