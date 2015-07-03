/**
 * The purpose of this file is to generate the new doc by also migrating the existing comments
 *
 * @type {exports}
 */

var fs = require('fs'),
    TypeScript = require('typescript-services'),
    mdBuilder = require('./mdBuilder');

var classesLocation = '/content/classes/',
    fileLocation = './scripts/helpers/builder/',
    version = '0.0',
    fileName = 'babylon.' + version + '.d.ts';

var readDefiniton = function (cb) {
    fs.readFile(fileLocation + fileName, function (err, data) {
        if (err) throw err;

        var output = JSON.stringify(tree(data.toString()).sourceUnit());
        console.log(output);
        cb(output);
    });
};

var tree = function (text) {
    return TypeScript.Parser.parse(fileName,
        TypeScript.SimpleText.fromString(text),
        true /* is .d.ts? */,
        new TypeScript.ParseOptions(TypeScript.LanguageVersion.EcmaScript5, true /* allow ASI? */));
};

var write = function (err, fd, input) {
    if (err) return console.log(err);

    fs.write(fd, input);
};


var writeMd = function (input) {

    var formattedData = [];

    //input.map(function (page, index, newPage) {
    //    this.push({
    //        id     : page['ID_PAGE'],
    //        title  : page['PG_TITLE'],
    //        version: page['PG_VERSION'],
    //        content: page['PG_CONTENT']
    //    });
    //}, formattedData);

    //fs.open('output.json', 'a', write);
    //fs.write(fd, formattedData, function(err, written){
    //    console.log(written);
    //});

    console.log(formattedData);
    //mdBuilder.buildMDDir(formattedData);
};

readDefiniton(writeMd);

//console.log(tree);
//var output = JSON.stringify(readDefiniton().sourceUnit());
//var output = JSON.stringify(tree.sourceUnit().moduleElements);

//var file = fs.open('output.json', 'a', write);


console.log('outputed');


