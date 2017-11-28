/*
 * grunt-simple-copy
 * https://github.com/hellonuh/grunt-simple-copy
 *
 * Copyright (c) 2017 Neyazul Haque
 * Licensed under the MIT license.
 */

'use strict';
const path = require('path');
const fs = require('fs');
const shell = require('shelljs');

module.exports = function(grunt) {
  /**
   * 
   * @param {Path} src 
   * @param {Path} dest 
   */
  function simpleCopy(src,dest){
    try{
        const st = fs.lstatSync(src);
        if(st.isDirectory()){
          try{
            fs.lstatSync(dest);
          }catch(err){
            shell.mkdir('-p', dest); 
          }
        }
        shell.cp('-rf', src, dest);
        return `${src} copy success.`;
    }catch(err){
        throw new Error(`${src} copy fail.`)
    }
  }

  grunt.registerMultiTask('simple_copy', 'A simple plugin to quickly copy files and folders without any processing.', function() {
    this.files.forEach(f=>{
      f.src.forEach(src => {
        try{
          const res = simpleCopy(path.resolve(src),path.resolve(f.dest));
          grunt.log.write(`INFO: ${res}\n`);
        } catch(err){
          grunt.log.warn(`WARN: ${err.message}`);
        }
      });
    });
  });
};
