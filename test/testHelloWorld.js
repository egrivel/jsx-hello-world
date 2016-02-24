'use strict';

/**
 * Test file for the HelloWorld component.
 *
 * This test file shows two different ways of doing a unit test on a React
 * component: rendering the component to HTML, and rendering the component
 * to a DOM structure.
 */

var expect = require('chai').expect;

var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
var TestUtils = require('react-addons-test-utils');

var HelloWorld = require('../src/HelloWorld.jsx');

describe('HelloWorld component', function() {
  describe('#render function', function() {
    /* example test using static markup. */
    it('displays Hello World', function() {
      var html = ReactDOMServer.renderToStaticMarkup(
        React.createElement(HelloWorld, null));
      expect(html).to.contain('>Hello, World!<');
    });

    /* example test using a DOM component */
    it('component with Hello world', function() {
      var component = TestUtils.renderIntoDocument(
        React.createElement(HelloWorld, null));
      var div = ReactDOM.findDOMNode(component);
      expect(div.textContent).to.be.equal('Hello, World!');
    });
  });
});
