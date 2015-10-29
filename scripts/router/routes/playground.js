var express = require('express'),
    app     = express(),
    router  = express.Router(),
    fs      = require('fs'),
    path    = require('path'),
    async   = require('async'),
    _       = require('lodash');

/***************
 * PLAYGROUND  *
 ***************/

router.get('/', function (req, res) {
    // request's params:
    var searchTerm = req.query.q + '' || '',
        basicFilters = (req.query.bf + '' || 'all'),
        page = (req.query.page || 1 ) - 1,
        resultMax = (req.query.max || 25),
        keywords = [];

    resultMax = parseInt(resultMax);
    page      = parseInt(page);

    if(searchTerm == 'undefined') {}
    else if(searchTerm.trim().indexOf(' ') != -1){
        keywords.push(searchTerm);

        /**
         * Split the search string
         * Then, store every word of the search string that is strictly longer than 1 character
         */
        searchTerm.split(' ').forEach(function(keyword){
            if(keyword.length >= 2){
                keywords.push(keyword);
            }
        });

    } else if (searchTerm.trim().length >= 2){
        // if there's only one word, just add it to the 'keywords' array
        // (if it's longer than 1 character)
        keywords.push(searchTerm);
    }

    // if any keywords in 'keywords', launch search on each element of this array; else
    // render default search page with a message
    if(keywords.length != 0){

        var searchResult = []; // the set of result to be rendered on the page

        var totalCount = 27;
        searchResult = [
            {src:"http://google.fr",content:"The place to be"},
            {src:"http://qwant.fr",content:"Something better!"},
            {src:"http://bing.fr",content:"A very long text, maybe it can't take only one line because of the monstruous things said inside and because this sentence has no meaning for others too..."},
            {src:"http://qwant.fr",content:"4"},
            {src:"http://bing.fr",content:"5"},
            {src:"http://hello.fr",content:"6"},
            {src:"http://qwant.fr",content:"7"},
            {src:"http://bing.fr",content:"8"},
            {src:"http://qwant.fr",content:"9"},
            {src:"http://bing.fr",content:"10"},
            {src:"http://hello.fr",content:"11"},
            {src:"http://qwant.fr",content:"12"},
            {src:"http://bing.fr",content:"13"},
            {src:"http://qwant.fr",content:"14"},
            {src:"http://bing.fr",content:"15"},
            {src:"http://hello.fr",content:"16"},
            {src:"http://qwant.fr",content:"17"},
            {src:"http://bing.fr",content:"18"},
            {src:"http://qwant.fr",content:"19"},
            {src:"http://bing.fr",content:"20"},
            {src:"http://hello.fr",content:"21"},
            {src:"http://qwant.fr",content:"22"},
            {src:"http://bing.fr",content:"23"},
            {src:"http://qwant.fr",content:"24"},
            {src:"http://bing.fr",content:"25"},
            {src:"http://hello.fr",content:"26"},
            {src:"http://qwant.fr",content:"27"}
        ];

        res.render('playground', {
            searchTerm  : searchTerm,
            resultsCount: totalCount,
            resultMax   : resultMax,
            results     : searchResult.slice(
                page * resultMax,
                (page +1) * resultMax
            ),
            page        : req.query.page || 1,
        });

    } else {
        //default search page
        res.render('playground', {
            resultsCount: 0,
            searchTerm : 0
        });
    }
});

module.exports = router;