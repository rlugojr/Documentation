/**
 * Load and write search index
 * @type {*}
 */

var fs = require('fs');
var path = require('path');
var async = require('async');
var readdirp = require('readdirp');

var lbl = require('line-by-line');

var _ = require('lodash');

var appRoot = require('app-root-path').path;
var fulltextsearchlight = require('full-text-search-light');

module.exports = function index(done) {

    readdirp(
        {
            root      : path.join(appRoot, 'content/'),
            depth     : 10,
            //entryType : 'files',
            fileFilter: '*.md'
        },
        function (err, allFiles) {
            if (err) console.log(err);

            var indexes = {};

            allFiles.directories.map(function (element) {
                delete element.stat;

                //Ignore directory classes
                if (element.name !== 'classes')  indexes[element.name] = new fulltextsearchlight();
            });

            async.each(allFiles.files,
                function (fileInfo, endIteration) {

                    var search = _.get(indexes, fileInfo.parentDir.substring(fileInfo.parentDir.lastIndexOf('\\') + 1));

                    var lr = new lbl(fileInfo.fullPath);
                    lr
                        .on('error', function (err) {
                            console.log('err', err, fileInfo);
                            endIteration(err);
                        })
                        .on('line', function (line) {
                            if (line) {
                                lr.pause();
                                var changeSlashes = /\\/g;
                                //var changeSlashes = new RegExp(path.sep, 'g');
                                var src = path.join(fileInfo.parentDir, path.basename(fileInfo.name, '.md')).replace(changeSlashes, '/');

                                //console.log(fileInfo.parentDir);
                                //console.log(fileInfo.parentDir.replace(changeSlashes, '/'));
                                //console.log(src);

                                search.add({
                                    //path is the link in the website
                                    src: src,
                                    name: path.basename(fileInfo.name, '.md'),
                                    text: line
                                });
                                lr.resume();
                            }
                        })
                        .on('end', function () {
                            console.log(fileInfo.name, ' indexed');

                            endIteration();
                        });

                },
                function (err) {
                    if (err) console.log('each error : ', err)
                    console.log('all indexes loaded');

                    async.forEachOf(indexes, function (value, key, endIteration) {
                        var path = 'data/search/' + key + '.json';

                        console.log('wait during index building : ', path);

                        async.asyncify(value.saveSync(path))(function () {
                            console.log(path, ' saved');
                            endIteration();
                        });
                    }, function (err) {
                        console.log('markdown totally indexed !');
                        if (done) done();
                    });

                }
            );
        }
    );
};