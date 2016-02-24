'use strict';

/**
 * Boot file, which loads the entire JSX application.
 */

var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = require('./HelloWorld.jsx');

ReactDOM.render(
  React.createElement(HelloWorld),

  /* global document:false */
  document.getElementById('body')
);
