/**
 * The following script creates the HTML static version of the index page.
 */

/*************************************************************************
 *                             REQUIREMENTS                              *
 ************************************************************************/

var jade    = require('jade'),
    fs      = require('fs');

/*************************************************************************
 *                                 SCRIPT                                *
 ************************************************************************/

module.exports = function(done) {
    var htmlRender = jade.renderFile('views/index.jade', { pretty: false });
    fs.writeFileSync('public/html/index.html', htmlRender);
};