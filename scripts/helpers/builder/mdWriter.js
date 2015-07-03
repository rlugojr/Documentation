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
 * @return string
 */
var getComments = function (astElement) {
    var result = '';
    var comments = astElement.preComments();
    for (var i in comments) result += comments[i].fullText() + '\n\n';
    return result;
};

module.exports.dirExists = function (file, cb) {
    fs.exists(file.newDirPath, function (exists) {
        if (exists) throw new Error('ERROR : dir for this version already exists');

        cb(null, file)
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

module.exports.createMd = function (filePath, cd, classContent, cb) {

    fs.writeFile(filePath, classContent, function (err) {
        if (!err) console.log('Md file created');

        cb(err, classContent);
    })
};


module.exports.addClassDescription = function (clasS) {
    return getComments(clasS);
};

module.exports.addConstructorDescription = function () {
};

/**
 * Returns markdown string formatted for class' functions
 * @param functioN : an array of objects with the properties : name, returnType, params, comment
 */
module.exports.addFunctionDescription = function (functioN) {


    var funName = functioN.propertyName.text();

    var funParameters = functioN.callSignature.parameterList.parameters.members;
    var funSignature = '(';

    for(var index in funParameters){
        var parameter = funParameters[index];

        var parameterType = parameter.typeAnnotation.type;
        var parameterKind = parameterType.kind();

        //console.log(parameter);
        //console.log(parameterKind);

        funSignature += parameter.identifier.text();
        parameter.questionToken ? funSignature += '?' : funSignature +='';
        funSignature += ': ';

        switch(parameterType.kind()){
            case TypeScript.SyntaxKind.AnyKeyword:
            case TypeScript.SyntaxKind.NumberKeyword:
            case TypeScript.SyntaxKind.BooleanKeyword:
            case TypeScript.SyntaxKind.StringKeyword:
                funSignature += parameter.typeAnnotation.type.text();
                break;
            case TypeScript.SyntaxKind.FunctionType:
                var parameters = parameterType.parameterList.parameters.members;
                var returnType = parameterType.parameterList.parameters.parent.parent.type._text;

                funSignature += '(';
                for (var jndex in parameters) {
                    funSignature += parameters[jndex].typeAnnotation.parent.identifier._text;
                    funSignature += ': ';
                    funSignature += parameters[jndex].typeAnnotation.type._text;
                    if (jndex < parameters.length - 1) {
                        funSignature += ', ';
                    }
                }
                funSignature += ') => ';
                funSignature += returnType;

                break;
            case TypeScript.SyntaxKind.ArrayType:
                funSignature += parameter.typeAnnotation.type.type.text();
                funSignature += '[]';
                break;
            case TypeScript.SyntaxKind.ObjectType:
                //TODO
                break;
            default:
                break;
        }

        if (index < funParameters.length - 1) {
            funSignature += ', ';
        }
    }

    funSignature += '): ';

    funSignature += functioN.callSignature.typeAnnotation.type._text;

    var description = '##' + funName + funSignature + '\n\n';

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
module.exports.addMembers = function (members) {
    var memberKeys = {
        name   : '',
        type   : '',
        comment: ''
    };

    var string = '';

    string += '##Members\n\n';

    for (var member in members) {

        //Maybe too heavy to check on EVERY iteration
        //if (!checkKeys(member, memberKeys)) {
        //    console.log('error : wrong member format');
        //    console.log(member);
        //    continue;
        //}
        string += '###' + member.name + ' : ' + member.type + '\n\n';

        string += member.comment;
    }

    return string;
};

module.exports.addVariableDescription = function (variable) {
    var varModifiers = variable.modifiers;

    //Ignore if private

    var varName = variable.variableDeclarator.propertyName.text();

    var varType = variable.variableDeclarator.typeAnnotation.type;

    switch (varType.kind()) {
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
            varType += returnType + '\n\n';
            break;
        case TypeScript.SyntaxKind.ObjectType:
            //TODO
            break;
        default:
            break;
    }
    var description = '##' + varName + ' : ' + varType + '\n\n';
    description += getComments(variable);

    return description;
};

module.exports.addInterfaceImplementation = function () {
};

//Append interface members
module.exports.appendToMd = function () {
};

