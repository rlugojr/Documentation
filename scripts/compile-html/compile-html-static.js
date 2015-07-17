/**
 * The following script creates static HTML
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
    console.log("> Index.html compiled.")
};