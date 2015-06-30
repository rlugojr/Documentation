var fs      = require('fs');
var r       = require('request');
var path    = require('path');
var marked  = require('meta-marked');

var url         = 'http://babylondoc-val.azurewebsites.net/private/export-md-pages.php';
var __DIRNAME__ = 'content/classes/';

/**
 * Gets all the md pages from the Azure DB of the previous documentation site,
 * and transform them to .md files.
 */
r(url, function (error, response, body) {

    // body = JSON String --- json = JSON Object
    var json = JSON.parse(body);

    cleanMDDir(json, buildMDDir);
});


/**
 * This function erases everything it will find in the /content/classes/ directory.
 * Then, it will launch the building of the MD pages with the callback function.
 * @param {JSON.OBJECT} data
 * @param callback
 * @return none
 */
var cleanMDDir = function(data, callback){
    var directories = fs.readdirSync(__DIRNAME__);

    // read directories content
    directories.forEach(function(directory){
        cleanDirectory(path.join(__DIRNAME__, directory));
    });

    console.log("Directories cleaned, now removing the directories...");

    directories.forEach(function(directory){
        fs.rmdir(path.join(__DIRNAME__, directory), function(err){
            if (err) throw err;
            console.log("Directory " + path.join(__DIRNAME__, directory) + " removed.");
        });
    });

    buildMDDir(data);
};

/**
 * Helper function to clean a directory (ESCAPE CALLBACK HELL!!!)
 * @param {string} directory_path
 * @return none
 */
var cleanDirectory = function(directory_path) {
    var files = fs.readdirSync(directory_path);

    console.log("Cleaning the directory: " + directory_path + "...");

    // remove every files found in the directory
    files.forEach(function (file) {
        fs.unlink(path.join(directory_path, file), function () {
            console.log("deleted: " + path.join(__DIRNAME__, file));
        });
    });
};

/**
* Now the real thing is coming: build every MD pages corresponding to the JSON
* values
* @param data
* @return none
*/
var buildMDDir = function(data){
    data.forEach(function(json_data){
        if(dirExists(json_data['PG_VERSION'])){
            // build the page
            buildMDPage(json_data)
        } else {
            // build the directory before building the page
            fs.mkdirSync(path.join(__DIRNAME__, json_data['PG_VERSION']));
            buildMDPage(json_data);
        }
    });
};

/**
* Returns true or false if the directory already exists.
* @param dir_path
* @return boolean
*/
var dirExists = function(dir_name){
    var directories = fs.readdirSync(__DIRNAME__);

    var res = false;

    directories.forEach(function(directory){
        res = (directory == dir_name) || res;
    });

    return res;
};


/**
 * Builds the MD page from the
 * @param json_page
 */
var buildMDPage = function(json_page){
    /* JSON KEYS :
     * - ID_PAGE
     * - PG_TITLE
     * - PG_CONTENT
     * - PG_VERSION
     */

    var data =
        '---\n' +
        'ID_PAGE: ' + json_page['ID_PAGE'] + '\n' +
        'PG_TITLE: ' + json_page['PG_TITLE'] + '\n' +
        'PG_VERSION: ' + json_page['PG_VERSION'] + '\n' +
        '---\n' +
        json_page['PG_CONTENT'];

    var replaceChar = "_";
    var regEx = new RegExp('[,/\:*?""<>|]', 'g');

    var filename = path.join(__DIRNAME__, json_page['PG_VERSION'], json_page['PG_TITLE'].replace(regEx, replaceChar)) + '.md';

    fs.writeFileSync(filename, data);
};