/**
 * The following script creates the HTML static version for the "What's New"
 * page.
 */

/*************************************************************************
 *                             REQUIREMENTS                              *
 ************************************************************************/

var jade    = require('jade'),
    fs      = require('fs'),
    marked  = require('meta-marked');

/*************************************************************************
 *                                 SCRIPT                                *
 ************************************************************************/

module.exports = function(done) {
    var md = fs.readFileSync('content/whats-new/whats-new.md', {encoding: 'utf-8', flag: 'r'});

    var html_content = marked(md).html;

    var options = {
        pretty: false,
        currentUrl: '/whats-new',
        content: html_content
    };

    var htmlRender = jade.renderFile('views/whats-new.jade', options);
    fs.writeFileSync('public/html/whats-new.html', htmlRender);
};