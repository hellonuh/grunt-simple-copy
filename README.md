# grunt-simple-copy

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](https://gruntjs.com/)
[![Build status Window](https://ci.appveyor.com/api/projects/status/bo4hpc1mwa26a39n/branch/master?svg=true)](https://ci.appveyor.com/project/hellonuh/grunt-simple-copy/branch/master)


> A simple plugin to quickly copy files and folders without any processing.

## Getting Started
This plugin requires Grunt `^0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-simple-copy --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-simple-copy');
```

## The "simple_copy" task

### Usage
In your project's Gruntfile, add a section named `simple_copy` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    simple_copy: {
        main:{
          files:{
            'destination': [ 'source_folder','source_file'],
          }
        }
    }
});
```


### Sample
```js
grunt.initConfig({
    simple_copy: {
        main:{
          files:{
            'tmp/dist': [ 'test/fixtures/src/js','test/fixtures/src/index.html'],
          }
        }
    }
});
```

### Limitations
- `No support for ignoring files`. This is done intentionally to avoid complexity.

For full featured copy plugin use the official `grunt-contrib-copy`


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).


## Release History
- This release is taking care of the first requirement.

## License
MIT License

Copyright (c) 2017 Neyazul Haque
