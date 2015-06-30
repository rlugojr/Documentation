
// ************************************************* REQUIRE *************************************************

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

        classesClassesByVersionOrderByTag(version, function(content) {

            var data = {
                currentUrl      : "/classes",
                currentVersion  : version,
                versions        : versions,
                list            : content
            };

            res.render('class/classes.jade', data);
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
                res.render('errorpages/404_class_not_found.jade', {});
                return;
            }

            fs.readFile('./content/classes/v' + version + '/' + className + '.md', {"encoding" : "utf-8", "flag" : "r"}, function(error, content){
                if (error) res.render('errorpages/404_class_not_found.jade', {});

                var data = {
                    currentUrl      : "/classes",
                    currentVersion  : version,
                    className       : className,
                    categoryName    : categoryName,
                    content         : marked_github(content).html,
                    list            : classesList
                };

                res.render('class/class.jade', data);
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