var fs      = require('fs'),
    path    = require('path'),
    async   = require('async'),
    jade    = require('jade'),
    appRoot = require('app-root-path').path,
    logger  = require(path.join(appRoot, 'config/logger')),
    marked  = require('meta-marked');


var __TUTORIALS_LIST__ = path.join(appRoot, 'data/static-list.json'),
    __TUTORIALS_TAGS__ = path.join(appRoot, 'data/static-tags.json'),
    __TUTOS_VIEW_DIR__ = path.join(appRoot, 'views/tutorials'),
    __TUTORIALS_FILE__ = path.join(appRoot, 'public/html/tutorials.html'),
    __TUTORIAL_FILES_SOURCE__ = path.join(appRoot, 'content/tutorials'),
    __TUTORIAL_FILES_DEST__ = path.join(appRoot, 'public/html/tutorials');


module.exports = function(done){

    var globalObj = {
        "tags": {},
        "tutorials": {}
    };

    async.waterfall([
        async.constant(globalObj),
        getTutorialData,
        createTutorialsPage,
        getTutorialPagesContent,
        createTutorialPages
    ], function(error){
        if(error){
            done(false);
            throw error;
        } else {
            logger.info('Tutorials pages compiled.');
            done(true);
        }
    });

};

/**
 * gets the content of the two files
 * @param globalObj
 * @param callback
 */
var getTutorialData = function(globalObj, callback){
    fs.readFile(__TUTORIALS_TAGS__, function(errtag, tags_data){
        if(errtag) throw errtag;

        globalObj.tags = JSON.parse(tags_data).tutorials;

        fs.readFile(__TUTORIALS_LIST__, function(errtuto, list_data){
            if (errtuto) throw errtuto;
            globalObj.tutorials = JSON.parse(list_data).tutorials;

            callback(null, globalObj);
        });
    });
};

var createTutorialsPage = function(globalObj, callback){
    var tutorials_page = jade.renderFile(path.join(__TUTOS_VIEW_DIR__, 'tutorials.jade'), globalObj);

    fs.writeFile(__TUTORIALS_FILE__, tutorials_page, function(writeErr){
        if (writeErr) throw writeErr;
        callback(null, globalObj);
    });
};

var getTutorialPagesContent = function(globalObj, cb){
    var tutorialsContent = [];

    async.each(globalObj.tutorials, function(tutorial, callback){
        var filename = path.join(__TUTORIAL_FILES_SOURCE__, tutorial.name);

        fs.exists(filename, function(exists){
            if(!exists){
                logger.warn('File ' + filename + ' doesn\'t exist.')
            } else {
                fs.readFile(filename, {encoding: 'utf-8', flag: 'r'}, function(readErr, content){
                    if (readErr) throw readErr;
                    tutorialsContent.push({
                        "tutorialName": tutorial.name,
                        "tutorialMeta": marked(content).meta,
                        "tutorialContent": marked(content).html
                    });
                    callback();
                });
            }
        });
    }, function(){
        cb(null, tutorialsContent);
    });
};

var createTutorialPages = function(tutorialsContent, cb){
    async.each(tutorialsContent, function(tutorial, callback){
        var filename = path.join(__TUTORIAL_FILES_DEST__, tutorial.tutorialName + '.html');

        /**
         * tutorial = {
         *      "tutorialName"
                "tutorialMeta"
                "tutorialContent"
         * }
         * @type {*|String}
         */

        var tutorialPage = jade.renderFile(path.join(__TUTOS_VIEW_DIR__, 'tutorial.jade'), tutorial);

        fs.writeFile(filename, tutorialPage, function(writeErr){
            if (writeErr) throw writeErr;
            callback();
        });

    },function(){
        cb(null);
    });
};