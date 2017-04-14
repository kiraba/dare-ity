import React, { Component } from 'react';
import '../css/dares.css';

class Dare extends Component {
  render() {
  	var self = this;
    var dareName = 'Dare Name';
    var dareDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed est massa.';
    return (
      <div>
      <h1>{dareName}</h1>
      <h1>{dareDescription}</h1>
      </div>
    );
  }
}
export default Dare;

// bio limit: 130 characters.


