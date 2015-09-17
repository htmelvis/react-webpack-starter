var React = require('react');
//require('./components/testComponent.js');
require('./style/main.scss');
var TestComponent = require('./components/testComponent.js');
React.render(<TestComponent name="Test Component" />, document.getElementById('main'));