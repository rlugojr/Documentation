var file = {
    classesLocation: 'content/classes/',
    location       : './scripts/helpers/builder/sources/',
    version        : '2.2',
    previousVersion: '2.1',
    init: function(){
        this.name = 'babylon.' + this.version + '.d.ts';
        this.sourceFile = this.classesLocation + this.version + '/' + this.name;
        delete this.init;
        return this;
    }
}.init();

module.exports = {
    file: file
};