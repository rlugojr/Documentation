/*************************************************************************
 *                             REQUIREMENTS                              *
 ************************************************************************/
var express = require('express'),
    router = express.Router(),
    fs = require('fs'),
    path = require('path'),
    async = require('async'),
    marked_github = require('meta-marked'),
    _ = require('lodash');


marked_github.setOptions({
    renderer: new marked_github.Renderer(),
    gfm     : true,
    tables  : true,
    breaks  : true,
    sanitize: false
});

/*************************************************************************
 *                               VARIABLES                               *
 ************************************************************************/

var __publicRootPath = '../../../public';

/************************************************************************
 *                                ROUTES                                *
 ************************************************************************/

/**************
 * WHAT'S NEW *
 **************/
router.get('/whats-new', function (req, res) {
    fs.exists('public/html/whats-new.html', function (exists) {
        if (exists) {
            var options = {
                root: path.join(__dirname, __publicRootPath)
            };
            res.status(200);
            res.set({'Content-type': 'text/html'});
            res.sendFile('./html/whats-new.html', options);
        } else {
            // render 404 - Page not found
            logger.error('404 error - Page not found: public/html/whats-new.html');
            res.render('errorpages/404.jade', {});
        }
    });
});

// PAGE EXTENSIONS
router.get('/extensions', function (req, res) {
    // render the page
    res.render('extensions/extensions');
});

// PAGE EXTENSIONS
router.get('/exporters', function (req, res) {
    // render the page
    res.render('exporters/exporters');
});

/**************
 * INDEX PAGE *
 **************/
router.get('/', function (req, res) {
    fs.exists('public/html/index.html', function (exists) {
        if (exists) {
            var options = {
                root: path.join(__dirname, __publicRootPath)
            };
            res.status(200);
            res.set({'Content-type': 'text/html'});
            res.sendFile('./html/index.html', options);
        } else {
            // render 404 - Page not found
            logger.error('404 error - Page not found: public/html/index.html');
            res.render('errorpages/404.jade', {});
        }
    });
});

/***************
 * SEARCH PAGE *
 ***************/
router.get('/search', function (req, res) {
    var searchTerm = req.query.q + '';
    var page = req.query.page - 1;
    var resultMax = 25;
    var offset = page * resultMax;

    if (searchTerm && searchTerm.length + '' >= 2) {
        var results = [];
        var uniq = [];
        var totalCount = 0;
        //loop through indexes
        async.each(searchIndexes,
            function (index, endIteration) {

                var result = index.search(searchTerm);

                //Filter results
                async.each(result,
                    function (r, endIteration2) {
                        if (new RegExp(searchTerm, 'i').test(r.text) && !_.some(uniq, {src: r.src})) {
                            //skip results to simulate page change
                            if (offset > 0) {
                                offset--;
                            } else {
                                if (uniq.length < resultMax) {

                                    /**
                                     * To get the version, there are two cases :
                                     * exporters/Cheetah
                                     * classes/1.14/Action
                                     *
                                     * We only want the 'exporters' and '1.14'
                                     */

                                    //Remove the /Cheetah and /Action
                                    var version = r.src.substr(0, r.src.lastIndexOf('/'));
                                    //Remove the classes/ but keep the 1.14 and exporters !
                                    if (version.indexOf('/') != -1) version = version.substr(version.indexOf('/') + 1);

                                    uniq.push({
                                        src    : r.src,
                                        name   : r.name,
                                        version: version
                                        //text: r.text
                                    });
                                    //uniq.push(r);
                                }
                            }
                            totalCount++;
                        }
                        //when we got max results, just break the loop
                        if (page != 'NaN' && uniq.length >= resultMax) {
                            endIteration2(false);
                        } else {
                            endIteration2();
                        }
                    },
                    function (err) {
                        if (err) console.log(uniq.length);
                        results = results.concat(uniq);
                        endIteration();
                    }
                );
            },
            function () {
                res.render('search', {searchTerm: searchTerm, resultsCount: totalCount, results: uniq});
            }
        );
    } else {
        //default search page
        res.render('search', {searchTerm: searchTerm, resultsCount: 0});
    }
});

//We have to load all the indexes at the server start
var fulltextsearchlight = require('full-text-search-light');
var dirs = fs.readdirSync('data/search');
var searchIndexes = [];
for (var i = 0; i < dirs.length; i++) {
    searchIndexes.push(fulltextsearchlight.loadSync(path.join('data/search/', dirs[i])));
}

module.exports = router;