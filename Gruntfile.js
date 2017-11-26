/*
 * grunt-simple-copy
 * https://github.com/hellonuh/grunt-simple-copy
 *
 * Copyright (c) 2017 Neyazul Haque
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    simple_copy: {
        main:{
          files:{
            'tmp/dist': [ 'test/fixtures/src/js','test/fixtures/src/css','test/fixtures/src/fakeindex.html','test/fixtures/src/index.html'],
          }
        } 
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'simple_copy', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['simple_copy']);

};
