
// ************************************************* CLASSES *************************************************

/**
 * Show the Classes list. No version specified so get the last version and redirect to it
 */
exports.showClasses = function(req, res) {

    // TODO Find the last version in files
    var versions = classesListVersions();

    res.writeHead(301, {
        Location: (req.socket.encrypted ? 'https://' : 'http://') + req.headers.host + '/classes/2.1'
    });
    res.end();
};

/**
 * Show the Classes list.
 * @param req
 *          version - The version of babylon
 */
exports.showClassesVersion = function(req, res) {

    // TODO Get the classes list, and display them
    // TODO If the version doesn't exist, redirect to last /classes
    var version = req.params.version;
    var versions = classesListVersions();

    // TODO Verify if the param version exist
    var content = classesClassesByVersion(version);

    var data = {
        currentUrl  : "/classes",
        version     : version,
        versions    : versions,
        list        : content
    };

    res.render('class/classes.jade', data);
};

/**
 * Show the specified Class.
 * @param req
 *          name - Name of the Class
 *          version - The version of babylon
 */
exports.showClassVersionName = function(req, res) {

    // TODO Get the class markdown page and display it
    // TODO Verify if the param version / name exist
    var name = req.params.name;
    var version = req.params.version;

    var data = {
        currentUrl  : "/classes",
        exist       : false,
        name        : name,
        version     : version,
        title       : 'Animation',
        content     : 'An animation is a thing in Babylon.'
    };

    if(data.exist) {
        res.render('class/class.jade', data);
    }
    else {
        res.render('errorpages/404_class_not_found.jade', {});
    }
};



// ************************************************* FUNCTIONS *************************************************

/**
 * Get all the versions
 * @returns {Array} - 'vX.X'
 */
var classesListVersions = function() {

    var fs = require('fs');
    var results = [];

    fs.readdirSync('./data/classes-tags').forEach(function(file) {
        results.push(file.substr(1));
    });

    return results;
};

/**
 * Get all the tags / class list from a version
 * @param version - Version of babylon
 * @returns {*} - Array of tags / class
 */
var classesClassesByVersion = function(version) {

    var fs = require('fs');
    return JSON.parse(fs.readFileSync('./data/classes-tags/v' + version + '/tags.json', 'utf8'));
};