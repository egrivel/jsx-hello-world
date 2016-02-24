# JSX Sample Project

The purpose of this project is to show a minimal real project that works with
JSX, including unit test and coverage reports.

## Directory Structure

 - html: static index.html, which will load the application.
 - src: JavaScript source files (both `.js` and `.jsx` files).
 - dist: target directory for the generated `boot.js` file.
 - test: unit test files.

## Application

The starting point for this project is the `html/index.html` file. This file
provides the HTML framework and loads the `dist/app.js` file, which is the
total application, compiled by *browserify*.

The `src/boot.js` file is the bootstrap file which causes the application to
render. In this case, it calls the `ReactDOM.render()` function with the single
React component, *HelloWorld*.

The `src/HelloWorld.jsx` is the React component to render "Hello, World!".

## Dependencies

This project has the following production dependencies:

 - react: needed to run a React application.
 - react-dom: needed to run a React application.

This project has the following development dependencies:

 - browserify: needed to compile the source files into a single `app.js` file.
 - chai: test tool for unit testing. Provides the `describe()`, `it()` and
   `expect()` functions.
 - elint, eslit-config-google, eslint-config-xo, eslint-plugin-react: linter
   tool to check that the source for this project follows the coding guidelines.
   The "google" configuration is chosen as the standard for this project.
 - istanbul: code coverate tool.
 - jsdom: create a DOM structure during testing, which is needed for the
   `TestUtils.renderIntoDocument(` function to work (together with mocha-jsdom)
 - mocha: test tool, used for unit tests.
 - mocha-jsdom: create a DOM structure during testing, which is needed for the
   `TestUtils.renderIntoDocument(` function to work (together with jsdom).
 - react-addon-test-utils: rest utilities to test React components.
 - react-tools: used by the `tools/compiler.js` JSX compiler.
 - reactify: plugin for *browserify* to process jsx files.

## Scripts

`npm run build`: compile the application source files into `app.js`. All source
files are identified by starting at the `boot.js` boot file and recursively
following the `require()` imports.

`npm run eslint`: test the sources for compliance with the coding standards (run
the *eslint* linter).

`npm run test`: run the unit tests.

`npm run coverage`: run the tests and produce a code coverage report. Note that
this script uses `_mocha` instead of `mocha` to run the tests, since the
`_mocha` provides for the *istanbul* instrumentation.

## Testing

The `test` directory contains the unit tests.

The `tools/compiler.js` is a tool that will compile JSX files to regular
JavaScript. It is used on the *mocha* command line to pre-compile the React
components before they are included in the test.
