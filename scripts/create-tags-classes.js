/**
 * Reads all markdown files and create the json file tags.json listing all tags of all classes.
 * A tag is present in metadata of the markdown file
 * ---
 * Tags:
 *  - Mesh
 *  - Action
 *  - Geometry
 * ---
 * The producted json file is located in data/classes-tags.json.
 * Example :
 * {
 *   "1.14":{
 *   "Action":["Action","ActionManager"],
 *   "Mesh":["AbstractMesh","Mesh"]
 *   },
 *   "2.0":{
 *   "Action":["Action","ActionManager"],
 *   "Mesh":["AbstractMesh","Mesh"]
 *   },
 *   "2.1":{
 *   "Action":["Action","ActionManager"],
 *   "Mesh":["AbstractMesh","Mesh"],
 *   "Geometry":["Geometry"]
 *   }
}
 */
var marked    = require('meta-marked');
var fs        = require('fs');
var path      = require('path');

var CLASSES_FOLDER = '../content/classes/';
var TAG_FILENAME   = '../data/classes-tags.json';

var TAGS = {};

module.exports = function() {

    // Create a json file for all classes versions.
    fs.readdirSync(path.join(__dirname, CLASSES_FOLDER)).map(createJson);
    
    //The resulting file
    var myTagFile       = path.join(__dirname, TAG_FILENAME);
    // Creat dir if not existing
    fs.writeFileSync(myTagFile, JSON.stringify(TAGS));
    console.log("> data/classes-tags.json compiled.")
};

/**
 * Create a tags.json file for the version given in parameter
 * @param version
 */
function createJson(version) {

  // content/classes/<version>
  var myClassesFolder = path.join(__dirname, CLASSES_FOLDER+version);

  // Content all tags for the given version
  var currentVersion = {};

  // Get all markdown files
  fs.readdirSync(myClassesFolder)
    // Read each file from the class folder
    .map(function (f) {
      return {file:f, md:fs.readFileSync(path.join(myClassesFolder, f)).toString()};
    })
    // Read tags in the markdown
    .map(function (obj) {
      // MD filename
      var filename = path.basename(obj.file);
      filename = filename.replace('.md', '');

      // MD tags
      var tags = marked(obj.md).meta.TAGS;

      if (tags) {
          tags.forEach(function (tag) {
              if (typeof currentVersion[tag] === 'undefined') {
                  currentVersion[tag] = [filename];
              } else {
                  currentVersion[tag].push(filename);
              }
          });
      }
    });

  TAGS[version] = currentVersion;
}
