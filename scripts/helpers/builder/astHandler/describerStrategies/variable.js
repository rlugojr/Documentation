var TypeScript = require('typescript-services');
var TypeManager = require('../typeManager');

module.exports = {
    describe: function (variable) {
        var description = '###';

        //The MemberVariableDeclaration object encapsulates the variable declaration
        if (variable.kind() == TypeScript.SyntaxKind.MemberVariableDeclaration) {
            //add static keyword if needed
            if (variable.modifiers.indexOf(TypeScript.PullElementFlags.Static) > -1) {
                description += 'static ';
            }

            variable = variable.variableDeclarator;
        }

        var varName = variable.propertyName.text();

        //Extract the variable type
        var varType = TypeManager.getReturnString(variable);
        //var varType = variable.typeAnnotation.type;

        //TODO make type management more modular
        //switch (varType.kind()) {
        //    case TypeScript.SyntaxKind.AnyKeyword:
        //    case TypeScript.SyntaxKind.NumberKeyword:
        //    case TypeScript.SyntaxKind.BooleanKeyword:
        //    case TypeScript.SyntaxKind.StringKeyword:
        //    case TypeScript.SyntaxKind.IdentifierName:
        //        varType = varType._text;
        //        break;
        //    case TypeScript.SyntaxKind.FunctionType:
        //        var parameters = varType.parameterList.parameters.members;
        //        var returnType = varType.parameterList.parameters.parent.parent.type._text;
        //
        //        varType = '(';
        //        for (var index in parameters) {
        //            varType += parameters[index].typeAnnotation.parent.identifier._text;
        //            varType += ': ';
        //            varType += parameters[index].typeAnnotation.type._text;
        //            if (index < parameters.length - 1) {
        //                varType += ', ';
        //            }
        //        }
        //        varType += ') =&gt; ';
        //        varType += returnType;
        //        break;
        //    case TypeScript.SyntaxKind.ObjectType:
        //        var objectTypeDescription = '{';
        //        for(var index in varType.typeMembers.members){
        //            var member = varType.typeMembers.members[index];
        //            objectTypeDescription += ' ' + member.propertyName.text();
        //            objectTypeDescription += ': ' + member.typeAnnotation.type._text;
        //            if(index != varType.typeMembers.members.length -1) objectTypeDescription += ', ';
        //        }
        //        objectTypeDescription += ' }';
        //        varType = objectTypeDescription;
        //        break;
        //    case TypeScript.SyntaxKind.ArrayType:
        //        varType = varType.type.text();
        //        varType += '[]';
        //        break;
        //    default:
        //        break;
        //}
        description += varName + ' : ' + varType + '\n\n';

        return description;
    }
};