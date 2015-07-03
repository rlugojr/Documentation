
// ************************************************* REQUIRE *************************************************

var express = require('express'),
  router = express.Router();

var logger = require('../../../config/logger');

// ************************************************* CLASSES *************************************************


/**
 * Show the Classes list. No version specified so get the last version and redirect to it
 */
router.get('/', function(req, res) {
  // render the page
  res.render('extensions/extensions');
});

module.exports = router;


// ************************************************* FUNCTIONS *************************************************
