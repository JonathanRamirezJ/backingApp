import React, {Component} from 'react';

class Hello extends Component {
  render() {
    var developer = 'Jonathan-Ramirez';
    return (
      <h1>Wellcome to BackingApp v1. by {developer}</h1>
    );
  }
}

React.render(<Hello />, document.getElementById('root'));
