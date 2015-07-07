/**
 * The purpose of this file is to generate the new doc by also migrating the existing comments
 *
 * @type {exports}
 */

var fs = require('fs'),
    path = require('path'),
    async = require('async'),
    //TypeScript = require('typescript-services'),
    mdWriter = require('./mdWriter'),
    dtsParser = require('./dtsParser');

var classesLocation = 'content/classes/',
    fileLocation = './scripts/helpers/builder/',
    version = '0.0',
    fileName = 'babylon.' + version + '.d.ts',
    newDirPath = path.join(classesLocation, version);

//Pack everything to use it more easily in the waterfall
var file = {
    classesLocation: classesLocation,
    location: fileLocation,
    version: version,
    name: fileName,
    newDirPath: newDirPath
};

//Nobody modifies this object !
Object.freeze(file);

//
async.waterfall([
    async.constant(file),
    mdWriter.dirExists,
    //mdWriter.deleteDir,
    mdWriter.createDir,
    dtsParser.readFile,
    dtsParser.buildTree,
    dtsParser.visitTree
], outputConsole);

//Function executed once the waterfall has finished
function outputConsole (err, data){
    if(err) console.log ('Error : ', err);
    else console.log(data);

    console.log('End Of Main');
}