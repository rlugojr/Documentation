/**
 * Extracts description from object, imports old description and formats everything
 * @type {TypeScript|exports|module.exports}
 */

var TypeScript = require('typescript-services');
var TypeManager = require('./typeManager');

var file = require('../config').file;

var Describer = {
    fileName      : '',
    oldDescription: '',
    describer     : ''
};

Describer.setFileName = function (fileName) {
    this.fileName = fileName;
    return this;
};

Describer.setOldDescription = function (data) {
    //Before saving it, we need to get rid of links in md
    this.oldDescription = stripMdLinks(data);
    return this;
};

Describer.setDescriber = function (describer) {
    this.describer = describer;
    return this;
};

Describer.describe = function (astElement, withParams) {
    var astFormatted = Describer.describer.describe(astElement);
    var astComments = this.getComments(astElement, astFormatted, withParams);

    return astFormatted + astComments;
};
/**
 * returns comments of the given element
 * @param astElement AST TypeScript object
 * @param withParams boolean tells if th given object is commented with parameters or not
 * @return string
 */
Describer.getComments = function (astElement, astFormatted, withParams) {

    var serializedComments = '',
    //Returns Comment[]
        rawComments = astElement.preComments(),
        comments = '';

    var stripNewLines = /^\s+|\s+$/g;

    //strip new lines before and after the string
    astFormatted = astFormatted.replace(stripNewLines, '');
    //strip spaces around the string
    astFormatted = astFormatted.trim();
    //Espace specials chars, so that this string can be inserted in a regexp
    astFormatted = astFormatted.replace(/([()[{*+.$^\\|?])/g, '\\$1');

    var hasOldData = this.oldDescription ? true : false;
    if (hasOldData) {
        var getOldLine = new RegExp(astFormatted + "\\s*((.*\\s*)*?)(?=^#|$)", 'gm');
        var getOldParams = /(^([^\n\r]*)\|([^\n\r]*)$)/gm;

        var oldLineReged = '';
        var oldLineDescription = '';
    }


    //Serialize the array of comments
    for (var i in rawComments) serializedComments += rawComments[i].fullText() + '\n';


    if (!withParams) {
        var textRegexp = /(?=\*\s)(?!\*\n).*$/gm;
        /*
         line will look like :
         "* Description text"
         */
        var line = textRegexp.exec(serializedComments);

        /*
         Iterate over multilines comment
         */
        while (line != null) {
            /*
             take out the first asterisk and space, now looks like
             "Description text"
             */
            comments += line[0].slice(2) + '\n\n';

            line = textRegexp.exec(serializedComments);

        }

        //FIXME Duplicated o_O
        if (!comments && hasOldData) {
            oldLineReged = getOldLine.exec(this.oldDescription);
            if (oldLineReged) {
                oldLineDescription = oldLineReged[1];
                //Append the old comments to the new
                comments += oldLineDescription;

            }
        }

        comments = comments.replace(stripNewLines, '') + '\n\n';

    } else {
        var notParamRegexp = /(?:^\s*\*\s)(?!\@param)(.*)/gm;
        var funParameters = astElement.callSignature.parameterList.parameters.members;

        var line = notParamRegexp.exec(serializedComments);

        while (line != null) {

            comments += line[1] + '\n\n';

            line = notParamRegexp.exec(serializedComments);
        }


        if (!comments && hasOldData) {
            oldLineReged = getOldLine.exec(this.oldDescription);
            if (oldLineReged) {
                oldLineDescription = oldLineReged[1];
                //Append the old comments to the new
                comments += oldLineDescription;
            }
        }
        comments = comments.replace(stripNewLines, '') + '\n';

        if (hasOldData && funParameters.length > 0) {
            var oldLineIndex = getOldLine.lastIndex;
            var oldTemp = this.oldDescription.substr(oldLineIndex);

            //We need to execute it twice, before, in order to get rid of results we don't want
            getOldParams.exec(oldTemp);
            getOldParams.exec(oldTemp);

            var paramOldComments = [];
            var paramOldComment = getOldParams.exec(oldTemp);

            while (paramOldComment != null) {
                paramOldComments.push(paramOldComment[3]);
                paramOldComment = getOldParams.exec(oldTemp);

            }
        }

        var parametersHeader = '####Parameters\n' +
            ' | Name | Type | Description\n' +
            '---|---|---|---\n';

        var parametersDescription = '';

        parametersDescription += TypeManager.getDescriptionString(astElement.callSignature, serializedComments, true);

        if (funParameters.length > 0) {
            comments += '\n' + parametersHeader + parametersDescription;
        }
    }
    return comments;
};

Describer.getMetas = function () {

    //This skips the first ---\n and gets everything until the next \n---
    var beginMetasToken = '---\n';
    var endMetasToken = '\n---';
    var oldMetas = this.oldDescription.substring(0, this.oldDescription.indexOf(endMetasToken, this.oldDescription.indexOf(beginMetasToken)) + endMetasToken.length);

    var defaultMetas = '---\nTAGS:\n---\n';

    return (oldMetas ? oldMetas: defaultMetas) + '\n';
};

function stripMdLinks(mdData) {
    var getMdLinks = /\[(\w+)\]\(.*?\)/g;

    return mdData ? mdData.replace(getMdLinks, '$1') : '';
}

module.exports = Describer;