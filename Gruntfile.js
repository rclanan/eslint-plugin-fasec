'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      support: ['Gruntfile.js'],
      options: {
        jshintrc: '.jshintrc'
      },
      files: [ '**/*.js', '!**/node_modules/**', '!Gruntfile.js' ]
    }
  });

  // Register NPM tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // tasks to run on the CI platform
  grunt.registerTask('ci', ['jshint']);
};
