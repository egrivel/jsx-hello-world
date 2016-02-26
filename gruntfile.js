'use strict';

var path = require('path');

var setupBrowserify = function(grunt) {
  grunt.loadNpmTasks('grunt-browserify');
  grunt.config('browserify', {
    development: {
      src: ['src/boot.js'],
      dest: 'dist/app.js',
      options: {
        transform: [
          ['reactify']
        ]
      }
    },
    test: {
      src: [
        'test/00-test-setup.js',
        'test/**/*.js'
      ],
      dest: 'dist/test.js',
      options: {
        transform: [
          ['reactify']
        ]
      }
    }
  });
};

var setupCoverage = function(grunt) {
  grunt.config('generate-coverage', {
    options: {
      dir: 'coverage',
      pattern: ['coverage/raw-coverage.json'],
      print: 'summary',
      reporters: {
        lcov: {}
      }
    }
  });

  grunt.registerTask('coverage', function() {
    grunt.option('run-coverage', true);
    grunt.task.run(['test', 'generate-coverage']);
  });
};

var setupMochaPhantomJs = function(grunt) {
  grunt.loadNpmTasks('grunt-mocha-phantomjs');
  grunt.config('mocha_phantomjs', {
    all: ['test/test.html'],
    options: {
      config: {
        grep: grunt.option('grep')
      }
    }
  });
};

var setupTest = function(grunt) {
  grunt.registerTask('test', function() {
    if (grunt.option('run-coverage')) {
      // instrument code for code coverage and write coverage.json after done
      grunt.config('browserify.test.options.transform',
        ['reactify', 'browserify-istanbul']);
      grunt.config('mocha_phantomjs.options.config.hooks',
          path.join(__dirname, 'scripts', 'tasks', 'phantom-hooks.js'));
    }

    grunt.task.run(['browserify:test', 'mocha_phantomjs']);
  });
};

var setupBuild = function(grunt) {
  grunt.registerTask('build', function() {
    grunt.task.run(['browserify:development']);
  });
};

module.exports = function(grunt) {
  grunt.loadTasks('scripts/tasks');

  setupBrowserify(grunt);
  setupMochaPhantomJs(grunt);
  setupTest(grunt);
  setupCoverage(grunt);
  setupBuild(grunt);
};
