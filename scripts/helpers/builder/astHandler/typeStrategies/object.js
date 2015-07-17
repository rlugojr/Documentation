var TypeScript = require('typescript-services');

module.exports = {
    getParameterString  : function (astType) {
        return objectToString(astType);
    },
    getReturnString     : function (astType) {
        return objectToString(astType);
    },
    getDescriptionString: function (astType) {
        return objectToString(astType);
    }
};

function objectToString(object) {
    var objectTypeDescription = '{';
    for (var index in object.typeMembers.members) {
        var member = object.typeMembers.members[index];
        objectTypeDescription += ' ' + member.propertyName.text();
        objectTypeDescription += ': ' + member.typeAnnotation.type._text;
        if (index != object.typeMembers.members.length - 1) objectTypeDescription += ', ';
    }
    objectTypeDescription += ' }';
    object = objectTypeDescription;

    return object;
}