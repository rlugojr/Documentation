
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
 *      name - Name of the Class
 *      version - The version of babylon
 */
router.get('/:version/:name', function(req, res) {
    var version         = req.params.version;
    var className       = req.params.name;
    var categoryName    = null;
    var classTags       = null;

    // for internal forwarding (click on a link)
    if(className == 'page.php'){

        var pageID = req.query.p;

        res.writeHead(301, {
            Location: (req.socket.encrypted ? 'https://' : 'http://') + req.headers.host + '/forward/page.php?p=' + pageID
        });

        res.end();


    } else {
        fileExists(version, className, function(exists){
            if (exists){
                // render md page
                classesClassesByVersionOrderByAlpha(version, function(classListByAlpha){
                    classesClassesByVersionOrderByTag(version, function(classListByTag){
                        for(var category in classListByTag) {
                            for(var bClass in classListByTag[category]) {
                                if(classListByTag[category][bClass].toUpperCase() == className.toUpperCase()) {
                                    categoryName = category;
                                }
                            }
                        }

                        if(!categoryName) {
                            logger.warn('No category defined for class ' + version + '/' + className + ' in the tags file.');
                        }

                        fs.readFile(path.join('./content/classes', version, className) + '.md', {"encoding" : "utf-8", "flag" : "r"}, function(error, content) {
                            if (error) {
                                logger.error('404 error - File not found: ' + path.join('./content/classes', version, className) + '.md');
                                logger.error(error);
                                res.render('errorpages/404_class_not_found.jade', {classname:className});
                            } else {
                                var metaData = marked_github(content).meta;
                                classTags = metaData['TAGS'];

                                if(!classTags){
                                    logger.warn('No tag is connected with this class: v' + version + '/' + className);
                                }

                                var data = {
                                    currentVersion: version,
                                    categoryName: categoryName,
                                    className: className,
                                    classListByTag: classListByTag,
                                    classListByAlpha: classListByAlpha,
                                    content: marked_github(content).html,
                                    classTags: classTags
                                };

                                res.render('class/class.jade', data);
                            }
                        });
                    });
                });
            } else {
                // render 404 - Class not found
                logger.error('404 error - File not found: '  + path.join('./content/classes', version, className) + '.md');
                res.render('errorpages/404_class_not_found.jade', {classname:className});
            }
        });
    }


});


module.exports = router;


// ************************************************* FUNCTIONS *************************************************

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

/**
 * Helper method to test if a md file corresponding to a class exists or not
 * @param version
 * @param className
 */
var fileExists = function(version, className, callback){
    fs.exists(path.join('./content/classes/', version, className) + '.md', callback);
};