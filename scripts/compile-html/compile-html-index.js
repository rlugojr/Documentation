/**
 * The following script creates the HTML static version of the index page.
 */

/*************************************************************************
 *                             REQUIREMENTS                              *
 ************************************************************************/

var jade    = require('jade'),
    fs      = require('fs'),
    path    = require('path'),
    appRoot = require('app-root-path').path,
    logger  = require(path.join(appRoot, 'config/logger'));

/*************************************************************************
 *                                 SCRIPT                                *
 ************************************************************************/

module.exports = function(done) {
    var htmlRender = jade.renderFile('views/index.jade', { pretty: false, currentUrl: '/' });
    fs.writeFileSync('public/html/index.html', htmlRender);
    logger.info("> Index.html compiled.");
};