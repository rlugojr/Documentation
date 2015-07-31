var fs          = require('fs');
var r           = require('request');
var path        = require('path');
var marked      = require('meta-marked');
var mdBuilder   = require('./helpers/builder/mdBuilder');

var url         = 'http://babylondoc-val.azurewebsites.net/private/export-md-pages.php';
var __DIRNAME__ = 'content/classes/';

/**
 * Gets all the md pages from the Azure DB of the previous documentation site,
 * and transform them to .md files.
 */
r(url, function (error, response, body) {

    // body = JSON String --- json = JSON Object
    var pages = JSON.parse(body);
    var formattedData = [];

    var regexp = new RegExp('/^_/');

    pages.map(function(page, index, newPage){
        if(!page['PG_TITLE'].match(regexp)){
            this.push({
                id     : page['ID_PAGE'],
                title  : page['PG_TITLE'],
                version: page['PG_VERSION'],
                content: page['PG_CONTENT']
            });
        }


    }, formattedData);

    cleanMDDir(formattedData, mdBuilder.buildMDDir);
});


/**
 * This function erases everything it will find in the /content/classes/ directory.
 * Then, it will launch the building of the MD pages with the callback function.
 * @param {JSON.OBJECT} data
 * @param callback
 * @return none
 */
var cleanMDDir = function (data, callback) {
    var directories = fs.readdirSync(__DIRNAME__);

    // read directories content
    directories.forEach(function (directory) {
        cleanDirectory(path.join(__DIRNAME__, directory));

        fs.rmdir(path.join(__DIRNAME__, directory), function (err) {
            if (err) {
                logger.info(err);
            }
            logger.info("Directory " + path.join(__DIRNAME__, directory) + " removed.");
        });
    });

    callback(data);
};

/**
 * Helper function to clean a directory (ESCAPE CALLBACK HELL!!!)
 * @param {string} directory_path
 * @return none
 */
var cleanDirectory = function (directory_path) {
    var files = fs.readdirSync(directory_path);

    logger.info("Cleaning the directory: " + directory_path + "...");

    // remove every files found in the directory
    files.forEach(function (file) {
        fs.unlinkSync(path.join(directory_path, file));
    });

    //callback(directory_path);
};