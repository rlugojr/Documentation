/**
 * The following script retrieve all old PHP IDs we used in the previous BDD,
 * and stores the correlation between class names and old IDs. The purpose of
 * the resulting file is to work on the redirection from the old site to the
 * new, shiny one :-)
 */

/*************************************************************************
 *                             REQUIREMENTS                              *
 ************************************************************************/

var fs      = require('fs'),
    path    = require('path'),
    marked  = require('meta-marked'),
    async   = require('async'),
    LineByLineReader = require('line-by-line'),
    appRoot = require('app-root-path').path;

var fulltextsearchlight = require('full-text-search-light');
//var search = new fulltextsearchlight();

/*************************************************************************
 *                               VARIABLES                               *
 ************************************************************************/


var CLASSES_FOLDER = path.join(appRoot, 'content/classes/2.1/');

var search = fulltextsearchlight.loadSync('index.json');
//var files = fs.readdirSync(CLASSES_FOLDER);
//
//async.each(files, function(f, cb) {
//
//    var lr = new LineByLineReader(path.join(CLASSES_FOLDER, f));
//    lr.on('line', function (line) {
//        if (line) {
//            search.add({src: f, text: line});
//        }
//    });
//    lr.on('end', function () {
//        cb();
//    });
//}, function() {
//    console.log("debut de la recherche");
//    search.saveSync('index.json');
//    //ss('mesh');
    ss('intersectsMesh');
//    //ss('shader');
//    //ss('scene');
//});


function ss(term) {

    var results = search.search(term);
    var uniq = [];
    var uniqLine = [];
    results.forEach(function(r) {
        if (uniq.indexOf(r.src) == -1) {
            uniq.push(r.src);
            uniqLine.push(r.text);
        }
    });
    console.log(uniq);
    console.log(uniqLine);
}
/*************************************************************************
 *                                 SCRIPT                                *
 ************************************************************************/
