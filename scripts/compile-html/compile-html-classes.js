/**
 * The following script creates all the HTML pages we serve when the user
 * ask for /classes/a_bjs_version.
 * There are currently 3 HTML pages in public/html :
 * - classes_1.14.html
 * - classes_2.0.html
 * - classes_2.1.html
 * Also, this script creates all the HTML pages we serve when the user
 * ask for /classes/a_bjs_version/a_class_name.
 * The created files are stored in public/html, and each file in a folder
 * corresponding to the BJS version it belongs to.
 * The HTML files are built with the json files created respectively
 * by create-json-classes.js (file located in data/classes.json) and
 * create-tags.js (file located in data/classes-tags.json).
 */

/*************************************************************************
 *                             REQUIREMENTS                              *
 ************************************************************************/

var jade = require('jade'),
    fs = require('fs'),
    path = require('path'),
    async = require('async'),
    marked = require('meta-marked');

marked.setOptions({
    gfm: true,
    breaks: false,
    tables: true,
    sanitize: false,
    highlight: function(code){
        return require('highlight.js').highlightAuto(code).value;
    }
});

/*************************************************************************
 *                               VARIABLES                               *
 ************************************************************************/

// the JSON files we need to do the work
var __JSON_CLASSES__ = [
        'data/classes.json',
        'data/classes-tags.json'
    ],
// the folder where we'll store the produced HTML files
    __CLASSES_DESTDIR__ = 'public/html',
// the folder where we'll find the Jade file to compile
    __JADE_FILES_ROOTDIR__ = 'views',
// the folder where we'll find the MD files (contain the HTML content
// we have to write)
    __MD_FILES_ROOTDIR__ = 'content/classes';

/*************************************************************************
 *                                 SCRIPT                                *
 ************************************************************************/

module.exports = function (done) {
    async.waterfall([
        async.constant(__JSON_CLASSES__),
        readJSONFiles,
        buildHTMLPages
    ], function (error) {
        if (error) {
            done(false);
            throw error;
        }

        console.log("> All classes compiled.");
    });
};

/*************************************************************************
 *                               FUNCTIONS                               *
 ************************************************************************/

/**
 * Read JSON file given in parameter
 * @param filePath
 * @param callback(error, JSON object)
 */
var readJSONFiles = function (filePaths, callback) {
    var options = {encoding: 'utf-8', flag: 'r'};

    var jsonContent = {
        'json_classes_by_alpha': JSON.parse(fs.readFileSync(filePaths[0], options)),
        'json_classes_by_tags' : JSON.parse(fs.readFileSync(filePaths[1], options))
    };

    callback(null, jsonContent);
};

/**
 * Builds an HTML page for each version found in the JSON file.
 * @param jsonContent (json object)
 * @param callback
 */
var buildHTMLPages = function (jsonContent, callback) {
    var json_classes_by_alpha = jsonContent['json_classes_by_alpha'],
        json_classes_by_tags = jsonContent['json_classes_by_tags'];

    var versions = [];

    for (var version in json_classes_by_alpha) {
        versions.push(version);

        // delete all "class" HTML file
        flushDirectory(path.join(__CLASSES_DESTDIR__, 'class_' + version));
    }

    /***********************************
     * CREATION OF THE "CLASSES" PAGES *
     ***********************************/
    for (var version in json_classes_by_alpha) {
        var classes_classesByAlpha = json_classes_by_alpha[version];

        var classesByTags = json_classes_by_tags[version];

        // path we'll write the HTML classes page to
        var htmlClassesFilePath = path.join(__CLASSES_DESTDIR__, 'classes_') + version + '.html';

        // options for the Jade compiler
        var optionsClasses = {
            pretty        : false,
            currentUrl    : '/classes',
            currentVersion: version,
            versions      : versions,
            classesByAlpha: classes_classesByAlpha,
            classesByTags : classesByTags
        };

        var html = jade.renderFile(path.join(__JADE_FILES_ROOTDIR__, 'class/classes') + '.jade', optionsClasses);
        fs.writeFileSync(htmlClassesFilePath, html);
        process.stdout.write('.');
    }

    /***********************************
     *  CREATION OF THE "CLASS" PAGES  *
     ***********************************/
    for (var version in json_classes_by_alpha) {
        var classesByAlpha = json_classes_by_alpha[version];
        var classesByTags = json_classes_by_tags[version];

        // bjsClass = name of a class
        classesByAlpha.forEach(function (bjsClass) {
            // path to the MD file of the class
            var mdFilePath = path.join(__MD_FILES_ROOTDIR__, version, bjsClass) + '.md';

            // retrieve HTML content from the MD file
            var options = {encoding: 'utf-8', flag: 'r'};
            var markedContent = marked(fs.readFileSync(mdFilePath, options));
            var content = markedContent.html;

            // retrieve tags linked to the class
            var metadata = markedContent.meta;
            var classTags = metadata['TAGS'];

            // folder we're going to store the class HTML file in
            var class_html_folder = path.join(__CLASSES_DESTDIR__, 'class_' + version);

            // check if the folder exists, create it otherwise
            if (!fs.existsSync(class_html_folder)) {
                fs.mkdirSync(class_html_folder);
            }

            // path we'll write the HTML class page to
            var htmlClassFilePath = path.join(class_html_folder, bjsClass) + '.html';

            // options for the Jade compiler
            var optionsClass = {
                pretty          : false,
                currentUrl      : '/classes',
                currentVersion  : version,
                classListByAlpha: classesByAlpha,
                classListByTag  : classesByTags,
                className       : bjsClass,
                classTags       : classTags,
                content         : content
            };

            var html = jade.renderFile(path.join(__JADE_FILES_ROOTDIR__, 'class/class') + '.jade', optionsClass);
            fs.writeFileSync(htmlClassFilePath, html);
            process.stdout.write('.');
        });
    }

    callback(null);
};

/**
 * Helper method that delete every files from a directory.
 * @param path
 */
var flushDirectory = function (directoryPath) {
    if (fs.existsSync(directoryPath)) {
        var files = fs.readdirSync(directoryPath);
        files.map(function (file) {
            file = path.join(directoryPath, file);
            fs.unlinkSync(file);
        });

        console.log("Directory " + directoryPath + " has been flushed and is ready to receive new files.");
    }
};