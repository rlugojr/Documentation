/*************************************************************************
 *                             REQUIREMENTS                              *
 ************************************************************************/
var express = require('express'),
    router = express.Router(),
    fs = require('fs'),
    path = require('path'),
    async = require('async'),
    marked_github = require('meta-marked');


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
/*router.get('/search', function (req, res) {
    var searchTerm = req.query.q;
    var page = req.query.page;

    if (searchTerm && searchTerm.length > 2) {
        console.log('search route');
        var results = [];
        var uniq = [];
        async.each(searchIndexes,
            function (index, endIteration) {

                var result = index.search(searchTerm);

                async.each(result,
                    function (r, endIteration2) {
                        if (new RegExp(searchTerm, 'i').test(r.text) && uniq.indexOf(r.src) == -1) {
                            uniq.push(r);
                        }
                        endIteration2();
                    },
                    function (err) {
                        results = results.concat(uniq);
                        endIteration();
                    }
                );
            },
            function (err) {
                res.render('search', {results: uniq});
                console.log(uniq);
            }
        );
    } else {
        //default search page
        res.send('nooooooooooo ');
    }
});*/

//We have to load all the indexes at the server start
//var fulltextsearchlight = require('full-text-search-light');
//var dirs = fs.readdirSync('data/search');
//var searchIndexes = [];
//for (var i = 0; i < dirs.length; i++) {
//    searchIndexes.push(fulltextsearchlight.loadSync(path.join('data/search/', dirs[i])));
//}

module.exports = router;