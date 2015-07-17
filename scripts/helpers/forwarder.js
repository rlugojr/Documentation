var fs = require('fs'),
    marked = require('meta-marked'),
    __FILENAME__= 'data/forward.json';

module.exports.extractMeta = function(filePath, cb){
    fs.readFile(filePath, {encoding: 'utf-8'},function(err, data){
        if(err) throw err;
        var meta = marked(data).meta;
        cb(meta);
    });
};

module.exports.createForward = function(err, metaList){
    if (err) throw err;
    fs.writeFile(__FILENAME__, JSON.stringify(metaList), function(error){
        if (error) throw error;
        console.log('DONE');
    });
};