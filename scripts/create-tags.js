/**
 * Reads all markdown files and create the json file tags.json listing all tags of all classes.
 * A tag is present in metadata of the markdown file
 * ---
 * Tags:
 *  - Mesh
 *  - Action
 *  - Geometry
 * ---
 */
var marked    = require('meta-marked');
var fs        = require('fs');
var path      = require('path');

var CLASSES_FOLDER = '../content/classes/';
var TAG_FILENAME   = 'tags.json';


module.exports = function() {

  // Create a json file for all classes versions.
  fs.readdirSync(path.join(__dirname, CLASSES_FOLDER)).map(createJson);
};

/**
 * Create a tags.json file for the version fiven in parameter
 * @param version
 */
function createJson(version) {

  var TAGS = {};

  var myClassesFolder = path.join(__dirname, CLASSES_FOLDER+version);
  var myTagFile       = path.join(__dirname, '../data/classes-tags/'+version);

  // Creat dir if not existing
  if (!fs.existsSync(myTagFile)){
    fs.mkdirSync(myTagFile);
  }

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

      // MD tags
      var tags = marked(obj.md).meta.Tags;

      tags.forEach(function(tag) {
        if (typeof TAGS[tag] == "undefined") {
          TAGS[tag] = [filename];
        } else {
          TAGS[tag].push(filename);
        }
      });
    });

  // Write file
  fs.writeFileSync(path.join(myTagFile, TAG_FILENAME), JSON.stringify(TAGS));

}
