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
            'tmp/dist': [ 'test/fixtures/src/js','test/fixtures/src/css','test/fixtures/src/fakeindex.html','test/fixtures/src/index.html']
          }
        },
        dir:{
          files:{
            'tmp': [ 'test/fixtures/src/*']
          }
        }  
    },

    // Unit tests.
    nodeunit: {
      test1: ['test/simple_copy_test.js'],
      test2: ['test/simple_copy_dir_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test1', ['clean', 'simple_copy:main', 'nodeunit:test1']);
  grunt.registerTask('test2', ['clean', 'simple_copy:dir', 'nodeunit:test2']);
  grunt.registerTask('test', ['test1','test2']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['simple_copy']);

};
