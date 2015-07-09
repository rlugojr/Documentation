module.exports = function (grunt) {

    /** Create json tag files for classes */
    grunt.registerTask('tags', 'Compile tags', function () {
        require('./scripts/create-tags-classes')();
    });

    /** Create HTML files corresponding to MD*/
    grunt.registerTask('classes', 'Compiles classes.html', function () {

        var done = this.async();
        // the json file corresponding to all classes is first created...
        require('./scripts/create-json-classes')(
            function() {
                // ... then all HTML files are created.
                require('./scripts/create-html-classes')(done);
            }
        )
    });

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json')
    });
	
    //grunt.registerTask('default', ['tags']);
};

