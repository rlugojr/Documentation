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

    var keywords = [];

    // search on each word (if there is more than one word in the search)
    if(searchTerm.indexOf(' ') != -1){
        // store every word that is strictly longer than 1 character into an array of keywords

        // the first keyword to register is the searchTerm itself, before splitting it
        keywords.push(searchTerm);

        var splitSearchTerm = searchTerm.split(' ');
        splitSearchTerm.forEach(function(keyword){
            if(keyword.length >= 2){
                keywords.push(keyword);
            }
        });
    } else {
        keywords.push(searchTerm);
    }

    if(keywords.length != 0){
        var results = [];
        var uniq = [];
        var totalCount = 0;

        // for each keyword, loop through indexes
        async.each(keywords,
            function(keyword, cb){ // callback: the rendering of the result page
                async.each(req.app.locals.indexes,
                    function (index, endIteration) { // callback: call for the callback "cb"

                        var result = index.search(keyword);

                        //Filter results
                        async.eachSeries(result,
                            function (r, endIteration2) { // callback: concatenation of the unique results in the "results" array
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
                                } //Remove the classes/ but keep the 1.14 and exporters !
                                else if (version.indexOf('/') != -1) version = version.substr(version.indexOf('/') + 1);

                                // the code below ensure that page are returned as result only one time
                                if (
                                    new RegExp(_.escapeRegExp(keyword), 'i').test(r.text) &&
                                    !_.some(uniq, {src: r.src})
                                ) {

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
                    function(){
                        cb();
                    }
                );
            },
            function(){
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
            message: "Please try to run a search with at least one word longer than one character",
            searchTerm: searchTerm,
            resultsCount: 0
        });
    }
});

module.exports = router;