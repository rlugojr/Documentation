/*************************************************************************
 *                             REQUIREMENTS                              *
 ************************************************************************/
var express     = require('express'),
    router      = express.Router(),
    fs          = require('fs'),
    path        = require('path'),
    logger      = require('../../../config/logger');

/*************************************************************************
 *                              VARIABLES                                *
 ************************************************************************/

var __FORWARD_FILE__ = 'data/forward.json';

/*************************************************************************
 *                               ROUTES                                  *
 ************************************************************************/

// TEST : localhost:3000/forward/page.php?p=3269
// -> AbstractMesh, v1.14

router.get('/:pageID', function(req, res){
    var pageID = req.query.p;

    fs.readFile(__FORWARD_FILE__, function(err, data){
        if (err) throw err;
        data = JSON.parse(data);

        // JSON object
        forwardData = data[pageID];

        console.log(forwardData.version);

        switch(forwardData.type){
            case 'tutorials':

                break;

            case 'exporters':

                break;

            case 'extensions':

                break;

            case 'class':
                res.writeHead(301, {
                    Location: (req.socket.encrypted ? 'https://' : 'http://') + req.headers.host + '/classes/' + forwardData.version + '/' + forwardData.name
                });
                res.end();
                break;

            default:
                // ERROR
                logger.error('Forward failed. Requested page ID: ' + pageID);
                break;
        }
    });
});

module.exports = router;