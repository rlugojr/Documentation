var fs = require('fs'),
    util = require('util'),
    path = require('path'),
    async = require('async'),
    mdWriter = require('./mdWriter'),
    TypeScript = require('typescript-services');


/**
 * Reads the sourcefile
 * @param cb
 * @return file string
 */
var readFile = function (file, cb) {
    fs.readFile(file.location + file.name, function (err, text) {
        if (err) throw err;

        console.log('I am reading ..');

        cb(null, file, text.toString());

    });
};

/**
 * Parses .d.ts string
 * Outputs an  Abstract Syntax Tree
 * @param text input
 * @param cb
 */
var buildTree = function (file, text, cb) {
    console.log('I am the tree builder !');

    //A plain array of JSON elements, including classes, enums, interfaces
    var elements = [];

    var syntaxTree = TypeScript.Parser.parse(file.name,
        TypeScript.SimpleText.fromString(text),
        true /* is .d.ts? */,
        new TypeScript.ParseOptions(TypeScript.LanguageVersion.EcmaScript5, true /* allow ASI? */));

    var cs = new TypeScript.CompilationSettings();
    cs.codeGenTarget = TypeScript.LanguageVersion.EcmaScript5;
    var ics = TypeScript.ImmutableCompilationSettings.fromCompilationSettings(cs);

    var sourceUnit = TypeScript.SyntaxTreeToAstVisitor.visit(syntaxTree, file.name, cs, false);

    cb(null, file, sourceUnit.moduleElements, elements);
};

var visitTree = function (file, treeInput, elements, cb) {
    console.log('let\'s visit this');
    //console.log("position : " + tree.moduleElements.position);

    for (var i = 0, n = treeInput.childCount(); i < n; i++) {
        var me = treeInput.childAt(i);
        console.log(TypeScript.SyntaxKind[me.kind()] + " : " + me.kind());

        //console.log(util.inspect(me, false, null));
        if (me.kind() == TypeScript.SyntaxKind.ModuleDeclaration) {
            var md = me;
            console.log('module ' + md.name);
            visitTree(file, md.moduleElements, elements, cb);

        } else if (me.kind() == TypeScript.SyntaxKind.ClassDeclaration) {
            var cd = me;
            console.log('Begin with class ', cd.identifier.text());

            if(cd.modifiers.indexOf(TypeScript.PullElementFlags.Private) > -1) continue;
            if(cd.identifier.text().charAt(0) == '_') continue;

            var filePath = path.join(file.classesLocation, file.version, cd.identifier.text()) + '.md';


            /**
             * When you reach a class, create it and fill it up
             */
            async.waterfall([
                async.constant(filePath, cd),
                writeClassContent,
                mdWriter.createMd
            ], function (err, classContent) {
                if(err) console.log ('Error : ', err);
                else console.log('Done with class ', cd.identifier.text());
            });
            console.log('break');

        } else if (me.kind() == TypeScript.SyntaxKind.InterfaceDeclaration) {
            var id = me;
            console.log('interface ' + id.identifier.text());
            //console.log('heritage ' + util.inspect(id.heritageClauses, false, null));

        } else if (me.kind() == TypeScript.SyntaxKind.EnumDeclaration) {
            var ed = me;
            console.log('enum ' + ed.identifier.text());

        }

        console.log('looped : ', TypeScript.SyntaxKind[me.kind()] + " : " + me.kind());

        //switch (me.kind()) {
        //    case TypeScript.SyntaxKind.ModuleDeclaration:
        //        var md = me;
        //        console.log('module ' + md.name);
        //        visitTree(file, md.moduleElements, elements, cb);
        //        break;
        //    case TypeScript.SyntaxKind.ClassDeclaration:
        //        var cd = me;
        //        console.log('Begin with class ', cd.identifier.text());
        //
        //        var filePath = path.join(file.classesLocation, file.version, cd.identifier.text()) + '.md';
        //
        //
        //        /**
        //         * When you reach a class, create it and fill it up
        //         */
        //        async.waterfall([
        //            async.constant(filePath, cd),
        //            mdWriter.addClassDescription,
        //            writeClassContent,
        //            mdWriter.createMd
        //            //function(next){
        //            //    elements.push(cd);
        //            //    //visitTree(file, cd.classElements, elements, cb);
        //            //    next(cd.classElements);
        //            //}
        //        ], function (err, data) {
        //            //if(err) console.log ('Error : ', err);
        //            //else console.log(data);
        //            console.log('End with class ' + cd.identifier.text());
        //        });
        //        console.log('break');
        //        break;
        //
        //
        //    case TypeScript.SyntaxKind.InterfaceDeclaration:
        //        var id = me;
        //        console.log('interface ' + id.identifier.text());
        //        //console.log('heritage ' + util.inspect(id.heritageClauses, false, null));
        //        break;
        //    case TypeScript.SyntaxKind.EnumDeclaration:
        //        var ed = me;
        //        console.log('enum ' + ed.identifier.text());
        //        break;
        //    //case TypeScript.SyntaxKind.MemberVariableDeclaration:
        //    //    var vd = me;
        //    //    console.log('variable ' + vd.variableDeclarator.propertyName);
        //    //    elements.push({
        //    //        properties: vd
        //    //    });
        //    //    break;
        //    //case TypeScript.SyntaxKind.MemberFunctionDeclaration:
        //    //    var fd = me;
        //    //    console.log('method ' + fd.propertyName.text());
        //    //    elements.push({
        //    //        functions: fd
        //    //    });
        //    //    break;
        //    default:
        //        break;
        //}
    }
    cb(null, elements);
};

function writeClassContent(filePath, cd, cb) {
    console.log('whoo so class !', cd.identifier.text());

    var classContent = '';
    var classDescription = '##Description\n\n';
    var constructorDescription = '##Constructor\n\n';
    var variablesDescription = '##Members\n\n';
    var functionsDescription = '##Functions\n\n';

    classDescription += mdWriter.addClassDescription(cd);

    for (var i = 0, n = cd.classElements.childCount(); i < n; i++) {
        var me = cd.classElements.childAt(i);
        console.log(TypeScript.SyntaxKind[me.kind()] + " : " + me.kind());

        ////Ignore if child is private
        //if(me.modifiers.indexOf(TypeScript.PullElementFlags.Private) > -1) continue;

        switch (me.kind()) {
            case TypeScript.SyntaxKind.MemberVariableDeclaration:
                var vd = me;

                //Ignore if child is private
                //Members beginning by underscore are also considered as private
                if(vd.modifiers.indexOf(TypeScript.PullElementFlags.Private) > -1) continue;
                if(vd.variableDeclarator.propertyName.text().charAt(0) == '_') continue;

                variablesDescription += mdWriter.addVariableDescription(vd);
                break;
            case TypeScript.SyntaxKind.MemberFunctionDeclaration:
                var fd = me;

                if(fd.modifiers.indexOf(TypeScript.PullElementFlags.Private) > -1) continue;
                if(fd.propertyName.text().charAt(0) == '_') continue;

                //console.log('function', util.inspect(fd, null, false));

                functionsDescription += mdWriter.addFunctionDescription(fd);

                break;
            default:
                break;
        }

    }

    classContent = classDescription + constructorDescription + variablesDescription + functionsDescription;

    cb(null, filePath, cd, classContent);
}

module.exports.readFile = readFile;

module.exports.buildTree = buildTree;

module.exports.visitTree = visitTree;