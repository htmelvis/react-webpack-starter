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
        <div className="throw-away">
           <dl>
             <dt>|-components</dt>
             <dd>This will store component core files (.js|.scss)</dd>
             <dt>|-public</dt>
             <dd>Live dir with index.html loading bundle.js</dd>
             <dt>|-style</dt>
             <dd>Styles with nodesass</dd>
             <dt>|--modules</dt>
             <dd>Project why global style modules reside here (ex. bootstrap)</dd>
           </dl>
        </div>
    );
  }
});
