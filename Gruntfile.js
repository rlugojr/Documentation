module.exports = function (grunt) {

    /** Create json tag files */
    grunt.registerTask('tags', 'Compile tags', function () {
        require('./scripts/create-tags')();
    });

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json')

    });
	
    grunt.registerTask('default', ['tags']);
};

