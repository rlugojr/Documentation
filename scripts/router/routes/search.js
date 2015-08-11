var express = require('express'),
    app = express(),
    router = express.Router(),
    fs = require('fs'),
    path = require('path'),
    async = require('async'),
    _ = require('lodash');
/***************
 * SEARCH PAGE *
 ***************/
router.get('/', function (req, res) {
    var searchTerm = req.query.q + '';
    var page = (req.query.page || 1) - 1;
    var resultMax = 25;
    var offset = page * resultMax;


    if (searchTerm && (searchTerm + '').length >= 2) {
        var results = [];
        var uniq = [];
        var totalCount = 0;
        //loop through indexes

        //FIXME for a multi-word search use an array for index.search instead of a single string
        async.each(req.app.locals.indexes,
            function (index, endIteration) {

                var result = index.search(searchTerm);

                //Filter results
                async.eachSeries(result,
                    function (r, endIteration2) {
                        /**
                         * To get the version, there are two cases :
                         * exporters/Cheetah
                         * classes/1.14/Action
                         *
                         * We only want the 'exporters' and '1.14'
                         */

                        //Remove the /Cheetah and /Action
                        var version = r.src.substr(0, r.src.lastIndexOf('/'));

                        //FIXME exception for whats-new -_-'
                        if(r.name == 'whats-new' ) {
                            version = '- ';
                            r.src = 'whats-new'
                        }
                        //Remove the classes/ but keep the 1.14 and exporters !
                        else if (version.indexOf('/') != -1) version = version.substr(version.indexOf('/') + 1);

                        if (new RegExp(_.escapeRegExp(searchTerm), 'i').test(r.text) && !_.some(uniq, {src: r.src})) {

                            uniq.push({
                                src    : r.src,
                                name   : r.name,
                                version: version
                                //text: r.text
                            });
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
                        if (err) console.log(err);

                        results = results.concat(uniq);
                        endIteration();
                    }
                );
            },
            function () {
                var begin = offset;
                var end = offset + resultMax > uniq.length ? uniq.length : offset + resultMax;
                uniq = uniq.slice(begin, end);
                res.render('search', {
                    searchTerm  : searchTerm,
                    resultsCount: totalCount,
                    resultMax   : resultMax,
                    results     : uniq,
                    page        : req.query.page || 1
                });
            }
        );
    } else {
        //default search page
        res.render('search', {
            message: "Please try to run a search with more than one character",
            searchTerm: searchTerm,
            resultsCount: 0
        });
    }
});

module.exports = router;