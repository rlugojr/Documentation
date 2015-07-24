
var express = require('express'),
    router = express.Router(),
    fs = require('fs');


router.get('/', function(req, res){


    var output = parser.parse('public setActionOnTouch(action: () => any): void;');

    console.log(output);

    res.send(output);
});

module.exports = router;