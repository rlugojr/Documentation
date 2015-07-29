module.exports = function (grunt) {

    // show elapsed time at the end
    require('time-grunt')(grunt);

    // load all grunt tasks
    //require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch        : {
            options: {
                livereload: true
            },
            files  : ['views/**/*'],
            scripts: {
                files: [
                    'js/**/*.js'
                ]
            },
            css    : {
                files: [
                    'public/css/**/*.css',
                    '!public/css/libs'
                ]
            },
            sass   : {
                files: ['public/scss/**/*.scss'],
                tasks: ['sass:dev']
            },
            express: {
                files  : ['server.js', 'app.js', 'scripts/router/**/*.js', '!**/node_modules/**', '!Gruntfile.js'],
                tasks  : ['express:dev'],
                options: {
                    nospawn: true // Without this option specified express won't be reloaded
                }
            },
            lists  : {
                files  : ['content/exporters/*.md', 'content/extensions/*.md', 'content/tutorials/*.md'],
                tasks  : ['lists'],
                options: {
                    interval: 5000
                }
            },
            statics: {
                files: ['views/statics/*.jade', 'data/static-list.json', 'data/static-tags.json'],
                tasks: ['statics']
            }
        },
        // Sass Config
        sass         : {
            options: {
                cacheLocation: '.tmp/.sass-cache'
            },
            dev    : {
                files: [{
                    expand: true,
                    cwd   : 'public/scss',
                    dest  : 'public/css',
                    src   : ['main.scss'],
                    ext   : '.css'
                }]
            }
        },
        // Express Config
        express      : {
            dev: {
                options: {
                    script: 'server.js'
                }
            }
        },
        'json-minify': {
            build: {
                files: 'data/search/**/*.json'
            }

        },
        clean: {
            deleteFiles: {
                options:{
                    'no-write': false
                },
                src: [
                    'data/**.json',
                    '!data/static-tags.json',
                    'public/html/**',
                    '!public/html'
                ]
            }
        }
    });

    grunt.registerTask('lists', 'Create lists', [
        function () {
            var done = this.async();
            var dirs = [
                {name: 'exporters', path: 'content/exporters'},
                {name: 'extensions', path: 'content/extensions'},
                {name: 'tutorials', path: 'content/tutorials'}
            ];
            require('./scripts/create-list-pages')(dirs, done);
        }
    ]);

    grunt.registerTask('serve', 'Start working', [
        //'lists',
        'sass:dev',
        'express:dev',
        'watch'
    ]);

    grunt.registerTask('build-index', 'Create index search file',
        function () {
            var done = this.async();
        require('./scripts/helpers/indexer/main')(done);

    });
    /** Compile the static HTML page index **/
    grunt.registerTask('index', 'Compile the static HTML page index', function () {
        require('./scripts/compile-html/compile-html-index.js')();
    });

    grunt.registerTask('search-index', [
            'build-index',
            "json-minify:build"
        ]);

    /** Compile the static HTML page whats-new **/
    grunt.registerTask('whats-new', 'Compile the static HTML page whats-new', function () {
        require('./scripts/compile-html/compile-html-whats-new.js')();
    });

    /** Create json tag files for classes */
    grunt.registerTask('tags', 'Compile tags', function () {
        require('./scripts/compile-tags/compile-tags-classes')();
    });

    /** Create HTML files corresponding to classes*/
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

    grunt.registerTask('forward', 'Create the JSON file necessary to the internal and external forwarding.', function(){
        var done = this.async();
        require('./scripts/create-forward')(done);
    });

    // compiles lists necessary for the task "statics"
    grunt.registerTask('lists', 'Create lists', function () {
        var done = this.async();
        var dirs = [
            {name: 'exporters', path: 'content/exporters'},
            {name: 'extensions', path: 'content/extensions'},
            {name: 'tutorials', path: 'content/tutorials'}
        ];
        require('./scripts/create-list-pages')(dirs, done);
    });

    // compile HTML files for Exporters, Extensions, Tutorials
    grunt.registerTask('statics', 'Compile the static HTML pages for exporters, extensions, and tutorials', function () {
        var done = this.async();
        require('./scripts/compile-html/compile-html-statics')(done);
    });

    grunt.registerTask('clean',
        'Deletes all generated files.',
        ['clean:deleteFiles']
    );
    grunt.registerTask('compile',
        'Compile all HTML pages.',
        ['index', 'whats-new', 'tags', 'classes', 'forward', 'lists', 'statics']
    );
    grunt.registerTask('clean-n-compile',
        'Clean every generated/compiled files then recompile everything.',
        ['clean', 'compile']
    );
// load all grunt tasks
    require('load-grunt-tasks')(grunt);
};


