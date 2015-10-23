var React = require('react');
//This will house the pieces of the calculator and also let it be
//convert to es6
require('./testComponent.scss');
module.exports = React.createClass({
  getDefaultProps: function(){
    return {
      name:""
    }
  },
  render: function(){
    return (
      <div>
        <div className="logos">
         <img width="200" src="assets/images/reactjs.png" alt="ReactJS" />
         <img src="assets/images/webpack.png" width="200" alt="Webpack Module Bundler" />
         <h1>Simple Starter Kit</h1>
          <p class="explain">Just a simple starter kit for component development.</p>
       </div>
      </div>

    );
  }
});
