'use strict';

var React = require('react');

var HelloWorld = React.createClass({
  displayName: 'HelloWorld',

  render: function() {
    return <div>Hello, World!</div>;
  }
});

module.exports = HelloWorld;
