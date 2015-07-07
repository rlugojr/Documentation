/**
 * The following script retrieve all old PHP IDs we used in the previous BDD,
 * and stores the correlation between class names and old IDs. The purpose of
 * the resulting file is to work on the redirection from the old site to the
 * new, shiny one :-)
 */

/*************************************************************************
 *                             REQUIREMENTS                              *
 ************************************************************************/

var fs      = require('fs');
var path    = require('path');
var marked  = require('meta-marked');
var async   = require('async');

/*************************************************************************
 *                               VARIABLES                               *
 ************************************************************************/

var __DIRNAME__     = 'content/classes';
var __FILENAME__    = 'data/forward.json';

/*************************************************************************
 *                                 SCRIPT                                *
 ************************************************************************/

async.waterfall(
    [
        // i. Write the file/flush its content if already exists
        function(callback){
            fs.writeFile(__FILENAME__, '', function(err){
                if (err) throw err;
                callback(null);
            });
        },

        // ii. Get the list of versions folders' path
        function(callback) {
            fs.readdir(__DIRNAME__, function (err, versions) {
                if (err) throw err;

                var versionsList = [];

                versions.map(function(version){
                    this.push(path.join(__DIRNAME__, version));
                }, versionsList);


                /**
                 * versionsList = [
                 *      content/classes/v1.14,
                 *      content/classes/v2.0,
                 *      content/classes/v2.1
                 * ]
                 */
                callback(null, versionsList);
            });
        },

        // iii. Get the list of md files
        function(versionsList, callback) {
            async.map(versionsList, fs.readdir, function(err, fileNameLists){
                /**
                 * results =
                 * [
                 *      [v1.14 .md files list],
                 *      [v2.0 .md files list],
                 *      [v2.1 .md files list]
                 * ]
                 */

                callback(null, versionsList, fileNameLists);
            });
        },

        // iv. Retrieve the complete paths to the files
        function(versionsList, fileNameLists, callback){

            var completedPathFileNameList = [];

            for(var i = 0; i < fileNameLists.length; i++){
                fileNameLists[i].map(function(fileName){
                    this.push(path.join(versionsList[i], fileName));
                }, completedPathFileNameList);
            }

            /**
             * completedPathFileNameList = [
             *      content/classes/1.14/AbstractionMesh.md,
             *      ...
             *      content/classes/2.0/AbstractionMesh.md,
             *      ...
             *      content/classes/2.1/AbstractionMesh.md,
             *      ...
             * ]
             */

            callback(null, completedPathFileNameList);
        },

        // v. Retrieve metadata from each file
        function(completedPathFileNameList, callback){

            var metadata = [];

            completedPathFileNameList.map(function(filename){
                var fileContent = fs.readFileSync(filename, {encoding : 'utf-8', flag : 'r'});
                this.push(marked(fileContent).meta);
            }, metadata);

            callback(null, metadata);
        }
    ],

    // vi. Final callback. Process the metadata, write the content of the file
    function(error, metadata){

        // beginning of the file
        fs.appendFileSync(__FILENAME__, '{\n');

        metadata.forEach(function(data, index){

            // We have to check if the BJS version number is a round one;
            // if so, we have to add ".0" at the end of it.
            // First, convert the integer into a string
            data.PG_VERSION = data.PG_VERSION.toString();

            // then, check & concatenate, if necessary
            if(data.PG_VERSION.lastIndexOf('.') == -1){
                data.PG_VERSION = data.PG_VERSION.concat('.0');
            }

            // replace unwanted character in the name of the class ("<" & ">")
            data.PG_TITLE = data.PG_TITLE.replace("<", '_').replace(">", '_');

            fs.appendFileSync(__FILENAME__,
                '\"' + data.ID_PAGE + '\":{' +
                    '\"type\":\"class\",' +
                    '\"name\":' + JSON.stringify(data.PG_TITLE) + ',' +
                    '\"version\":' + JSON.stringify(data.PG_VERSION) +
                '}'
            );

            // check if end of file; if so, don't write a comma at the end of the last line
            if(index < (metadata.length - 1)){
                fs.appendFileSync(__FILENAME__, ', \n');
            } else {
                fs.appendFileSync(__FILENAME__, '\n');
            }
        });

        // end of the file
        fs.appendFileSync(__FILENAME__, '}');

        // finished!
        console.log('DONE. \nYou can check the JSON file here: ' + __FILENAME__);
    }
);