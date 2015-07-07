var fs = require('fs'),
    TypeScript = require('typescript-services');

/**
 * Returns wether the object is correctly formatted
 * @param obj : object to test
 * @return boolean
 */
var checkKeys = function (obj, model) {
    var objKeys = Object.keys(obj).sort();
    var modelkeys = Object.keys(model).sort();
    return JSON.stringify(objKeys) === JSON.stringify(modelkeys);
};

/**
 * returns comments of the given element
 * @param astElement AST TypeScript object
 * @param sortParameter boolean tells if th given object is commented with parameters or not
 * @return string
 */
var getComments = function (astElement, sortParameter) {
    var textRegexp = /(?=\*\s)(?!\*\n).*$/gm,
        serializedComments = '',
    //Returns Comment[]
        rawComments = astElement.preComments(),
        comments = '';

    //Serialize the array of comments
    for (var i in rawComments) serializedComments += rawComments[i].fullText() + '\n';

    if (!sortParameter) {
        /*
         line will look like :
         * Description text
         */
        var line = textRegexp.exec(serializedComments);

        /*
         Iterate over multilines comment
         */
        while (line != null) {
            /*
             take out the first asterisk and space, now looks like
             Description text
             */
            comments += line[0].slice(2) + '\n\n';

            line = textRegexp.exec(serializedComments);
        }

    } else {
        var notParamRegexp = /(?:^\s*\*\s)(?!\@param)(.*)/gm;

        var line = notParamRegexp.exec(serializedComments);

        while (line != null) {

            comments += line[1] + '\n\n';

            line = notParamRegexp.exec(serializedComments);
        }

        var parametersHeader = '####Parameters\n' +
            ' | Name | Type | Description\n' +
            '---|---|---|---\n';

        var parametersDescription = '';

        /*
         Outputs an array with three elements : the whole selected line beginning by
         * @param
         then, the parameter name
         then, the parameter description
         */
        var paramRegexp = /(?:\*\s\@param\s+)(\w*)(.*)/gm;

        //var param

        var funParameters = astElement.callSignature.parameterList.parameters.members;
        //var funSignature = '(';

        for (var index in funParameters) {
            var parameter = funParameters[index],
                parameterName = parameter.identifier.text(),
                parameterType = parameter.typeAnnotation.type;
            //optional parameter
            parameter.questionToken ? parametersDescription += 'optional | ' : parametersDescription += ' | ';

            //name of the parameter
            parametersDescription += parameterName + ' | ';

            //type of the parameter
            switch (parameterType.kind()) {
                case TypeScript.SyntaxKind.AnyKeyword:
                case TypeScript.SyntaxKind.NumberKeyword:
                case TypeScript.SyntaxKind.BooleanKeyword:
                case TypeScript.SyntaxKind.StringKeyword:
                case TypeScript.SyntaxKind.IdentifierName:
                    parametersDescription += parameter.typeAnnotation.type.text();
                    break;
                case TypeScript.SyntaxKind.FunctionType:
                    var parameters = parameterType.parameterList.parameters.members;
                    var returnType = parameterType.parameterList.parameters.parent.parent.type._text;

                    parametersDescription += '(';
                    for (var jndex in parameters) {
                        parametersDescription += parameters[jndex].typeAnnotation.parent.identifier._text;
                        parametersDescription += ': ';
                        parametersDescription += parameters[jndex].typeAnnotation.type._text;
                        if (jndex < parameters.length - 1) {
                            parametersDescription += ', ';
                        }
                    }
                    parametersDescription += ') => ';
                    parametersDescription += returnType;

                    break;
                case TypeScript.SyntaxKind.ArrayType:
                    parametersDescription += parameter.typeAnnotation.type.type.text();
                    parametersDescription += '[]';
                    break;
                case TypeScript.SyntaxKind.ObjectType:
                    //TODO
                    break;
                default:
                    break;
            }

            parametersDescription += ' | ';

            //description of the parameter
            var paramLine = paramRegexp.exec(serializedComments);
            //We need to find the line that comments our parameter
            while (paramLine != null) {
                if (paramLine[1] == parameterName) {
                    parametersDescription += paramLine[2];
                }
                paramLine = paramRegexp.exec(serializedComments);
            }

            //break line to go to the next parameter
            parametersDescription += '\n';

            //add a second line break if it is the last element of the table
            if (index == funParameters.length - 1) parametersDescription += '\n';

        }

        parametersDescription != '' ? comments += '\n\n' + parametersHeader + parametersDescription : null;
    }


    return comments;
};

module.exports.dirExists = function (file, cb) {
    fs.exists(file.newDirPath, function (exists) {
        if (exists) throw new Error('ERROR : dir for this version already exists');

        cb(null, file);
    });
};

module.exports.createDir = function (file, cb) {

    fs.mkdir(file.newDirPath, function (err) {
        if (!err) console.log('new Directory created : ', file.newDirPath);
        cb(err, file);
    });
};

module.exports.deleteDir = function (path, cb) {
    fs.rmdir(path, function (err) {
        if (!err) console.log('Directory removed : ', path);

        cb(err, path);
    });
};

module.exports.createMd = function (filePath, element, dataToWrite, cb) {

    fs.writeFile(filePath, dataToWrite, function (err) {
        if (!err) console.log('Md file created');

        cb(err, element);
    })
};


module.exports.addClassDescription = function (clasS) {
    var description = '',
        name = clasS.identifier.text(),
        heritageClauses = clasS.heritageClauses.members,
        classExtends = '',
        classImplements = '';

    for (var index in heritageClauses) {
        var clause = heritageClauses[index];

        if (clause.kind() === TypeScript.SyntaxKind.ExtendsHeritageClause) {
            classExtends = clause.typeNames.members[0].text();
        } else if (clause.kind() === TypeScript.SyntaxKind.ImplementsHeritageClause) {
            classImplements = clause.typeNames.members[0].text();
        }
    }

    var comments = getComments(clasS);

    description += 'class ' + name +
        (classExtends ? ' extends ' + classExtends : '') +
            //TODO we don't want to see implements, just useful for after
        (classImplements ? ' implements ' + classImplements : '') +
        '\n\n' + comments;

    return description;
};

module.exports.addConstructorDescription = function () {
};

/**
 * Returns markdown string formatted for class' functions
 * @param functioN : an array of objects with the properties : name, returnType, params, comment
 */
module.exports.addFunctionDescription = function (functioN) {
    var description = '##',
        funName = '',
        funReturnType = '';

    //If this is a constructor, then there is no name to write
    if (functioN.kind() == TypeScript.SyntaxKind.ConstructorDeclaration) {
        funName += 'new ' + functioN.parent.parent.identifier.text();

    } else {
        //add static keyword if needed
        if (functioN.modifiers.indexOf(TypeScript.PullElementFlags.Static) > -1) {
            description += 'static ';
        }
        funName += functioN.propertyName.text();
        funReturnType += ': ' + functioN.callSignature.typeAnnotation.type._text + '\n';
    }


    /*
     Looks like
     /**
     * lorem ipsum sit dolor
     * amet consectetuir
     * @param var description
     * @param var2 description
     */
    var funComments = getComments(functioN, true),
        funParameters = functioN.callSignature.parameterList.parameters.members,
        funSignature = '(';

    for (var index in funParameters) {
        var parameter = funParameters[index];

        var parameterType = parameter.typeAnnotation.type;

        funSignature += parameter.identifier.text();
        if (index < funParameters.length - 1) {
            funSignature += ', ';
        }
    }

    funSignature += ')';

    funSignature += funReturnType + '\n\n';

    description += funName + funSignature + funComments;

    return description;
};

/**
 * Returns markdown string formatted for function's params
 * @param params : an array of objects with the properties
 */
var addParams = function (params) {

};


/**
 * Returns markdown string formatted for class' members
 * @param members : an array of objects with the properties : name, type, comment
 */
module.exports.addVariableDescription = function (variable) {
    var description = '##';

    //add static keyword if needed
    if (variable.modifiers.indexOf(TypeScript.PullElementFlags.Static) > -1) {
        description += 'static ';
    }

    var varName = variable.variableDeclarator.propertyName.text();

    //Extract the variable type
    var varType = variable.variableDeclarator.typeAnnotation.type;

    switch (varType.kind()) {
        case TypeScript.SyntaxKind.AnyKeyword:
        case TypeScript.SyntaxKind.NumberKeyword:
        case TypeScript.SyntaxKind.BooleanKeyword:
        case TypeScript.SyntaxKind.StringKeyword:
        case TypeScript.SyntaxKind.IdentifierName:
            varType = varType._text;
            break;
        case TypeScript.SyntaxKind.FunctionType:
            var parameters = varType.parameterList.parameters.members;
            var returnType = varType.parameterList.parameters.parent.parent.type._text;

            varType = '(';
            for (var index in parameters) {
                varType += parameters[index].typeAnnotation.parent.identifier._text;
                varType += ': ';
                varType += parameters[index].typeAnnotation.type._text;
                if (index < parameters.length - 1) {
                    varType += ', ';
                }
            }
            varType += ') => ';
            varType += returnType;
            break;
        case TypeScript.SyntaxKind.ObjectType:
            //TODO
            break;
        case TypeScript.SyntaxKind.ArrayType:
            varType = varType.type.text();
            varType += '[]';
            break;
        default:
            break;
    }
    description += varName + ' : ' + varType + '\n\n';

    description += getComments(variable);

    return description;
};

module.exports.addInterfaceImplementation = function () {
};

//Append interface members
module.exports.appendToMd = function () {
};

module.exports.getComments = getComments;