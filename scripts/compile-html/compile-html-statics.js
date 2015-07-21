/**
 * This file compile HTML files for the exporters, the extensions, and the tutorials.
 */

var fs      = require('fs'),
    path    = require('path'),
    async   = require('async'),
    jade    = require('jade'),
    appRoot = require('app-root-path').path,
    logger  = require(path.join(appRoot, 'config/logger')),
    marked  = require('meta-marked'),
    rimraf  = require('rimraf');


marked.setOptions({
    gfm: true,
    breaks: false,
    tables: true,
    sanitize: false,
    highlight: function(code){
        return require('highlight.js').highlightAuto(code).value;
    }
});

var __FILES_LIST__      = path.join(appRoot, 'data/static-list.json'),
    __TAGS_LIST__       = path.join(appRoot, 'data/static-tags.json'),
    __JADE_STATICS__    = path.join(appRoot, 'views/statics/statics.jade'),
    __JADE_STATIC__     = path.join(appRoot, 'views/statics/static.jade'),
    __FILES_SOURCE__    = path.join(appRoot, 'content/'),
    __FILES_DEST__      = path.join(appRoot, 'public/html/');


module.exports = function(done){
    var staticCategories = [
        "exporters",
        "extensions",
        "tutorials"
    ];

    var globalObj = {
        "tags": {},
        "files": {}
    };

    fs.readFile(__TAGS_LIST__, function(errtag, tags_data){
        if(errtag) throw errtag;

        globalObj.tags = JSON.parse(tags_data);

        fs.readFile(__FILES_LIST__, function(errfiles, list_data){
            if (errfiles) throw errfiles;
            globalObj.files = JSON.parse(list_data);

            // for jade rendering purpose, add a "url" property, that is the name
            // of the tutorial with blank spaces replaced by "_"
            async.forEachOf(globalObj.files, function(value, category, cb){
                // category = exporters/extensions/tutorials
                async.forEachOf(globalObj.files[category], function(value2, file, cb2){

                    // for example: globalObj.files[exporters][0] =
                    // {
                    //      name: 'Bones influences per vertex'
                    // }

                    globalObj.files[category][file]['url'] = globalObj.files[category][file].name.replace(/\s/g, "_");
                    globalObj.files[category][file]['category'] = category;

                    // and now: globalObj.files[exporters][0] =
                    // {
                    //      "name": "Bones influences per vertex",
                    //      "url": "Bones_influences_per_vertex",
                    //      "category": "exporters"
                    // }

                    cb2();
                }, function(){
                    cb();
                });
            }, function(){
                // we have all the data we need in globObj; now we can process these data
                async.each(staticCategories, function(category, finalCallback){
                    var tags = globalObj.tags[category],
                        files = globalObj.files[category];

                    var dataObject = {
                        "category": category,
                        "tags": tags,
                        "files": files
                    };

                    async.waterfall([
                        async.constant(dataObject, category),
                        createStaticsPage,
                        getStaticPagesContent,
                        createStaticPages
                    ], function(error){
                        if(error){
                            throw error;
                        } else {
                            logger.info(category + ' pages compiled.');
                            finalCallback();
                        }
                    });
                }, function(){
                    logger.info('All pages compiled.');
                    done(true);
                })

            });
        });
    });
};

var createStaticsPage = function(dataObj, category, cb){
    var statics_page = jade.renderFile(__JADE_STATICS__, dataObj);

    fs.writeFile(path.join(__FILES_DEST__, category + '.html'), statics_page, function(writeErr){
        if (writeErr) throw writeErr;
        cb(null, dataObj, category);
    });
};

var getStaticPagesContent = function(dataObj, category, cb){
    var staticsContents = [];

    async.each(dataObj.files, function(file, callback){
        var filename = path.join(__FILES_SOURCE__, category, file.url + '.md');

        fs.exists(filename, function(exists){
            if(!exists){
                logger.warn('File ' + filename + ' doesn\'t exist.')
            } else {
                fs.readFile(filename, {encoding: 'utf-8', flag: 'r'}, function(readErr, content){
                    if (readErr) {
                        console.log(readErr);
                    } else {
                        var markedContent = marked(content);
                        staticsContents.push({
                            "staticName": markedContent.meta['PG_TITLE'],
                            "staticFileName": markedContent.meta['PG_TITLE'].replace(/\s/g, "_"),
                            "staticMeta": markedContent.meta,
                            "staticContent": markedContent.html
                        });
                        callback();
                    }
                });
            }
        });
    }, function(){
        cb(null, staticsContents, category);
    });
};

var createStaticPages = function(staticsContents, category, cb){
    // flush public/html/<category> folder
    rimraf(path.join(__FILES_DEST__, category), function(err){
        if (err) {
            throw err;
        } else {
            fs.mkdirSync(path.join(__FILES_DEST__, category));

            async.each(staticsContents, function(staticContent, callback){
                var filename = path.join(__FILES_DEST__, category, staticContent.staticFileName + '.html');
                staticContent['category'] = category;
                var staticPage = jade.renderFile(path.join(__JADE_STATIC__), staticContent);

                fs.writeFile(filename, staticPage, function(writeErr){
                    if (writeErr) throw writeErr;
                    callback();
                });

            },function(){
                cb(null);
            });
        }
    });
};