import React, { Component } from 'react';
import '../css/homepage.css';
import BroadcasterContainer from './BroadcasterContainer';

class Homepage extends Component {
  render() {
    return (
      <div className="People">
        <BroadcasterContainer />
      </div>
    );
  }
}
export default Homepage;
