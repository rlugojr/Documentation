module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });

    grunt.registerTask('lists', 'Create lists', function () {
        var done = this.async();
        var dirs = [
            {name: 'exporters', path: 'content/exporters'},
            {name: 'extensions', path: 'content/extensions'},
            {name: 'tutorials', path: 'content/tutorials'}
        ];
        require('./scripts/create-list-pages')(dirs, done);
    });

    /** Create json tag files for classes */
    grunt.registerTask('tags', 'Compile tags', function () {
        require('./scripts/compile-tags/compile-tags-classes')();
    });

    /** Create HTML files corresponding to MD*/
    grunt.registerTask('classes', 'Compiles classes.html', function () {

        var done = this.async();
        // the json file corresponding to all classes is first created...
        require('./scripts/create-list/create-list-classes')(
            function () {
                // ... then all HTML files are created.
                require('./scripts/compile-html/compile-html-classes')(done);
            }
        )
    });

    /** Compile the static HTML page index **/
    grunt.registerTask('index', 'Compile the static HTML page index', function () {
        require('./scripts/compile-html/compile-html-index.js')();
    });

    /** Compile the static HTML page whats-new **/
    grunt.registerTask('whats-new', 'Compile the static HTML page whats-new', function () {
        require('./scripts/compile-html/compile-html-whats-new.js')();
    });

    grunt.registerTask('tutorials', 'Compile the static HTML pages for tutorials', function(){
        var done = this.async();
        require('./scripts/compile-html/compile-html-tutorials')(done);
    });

    grunt.registerTask('html', ['index', 'whats-new', 'tags', 'classes']);
};

