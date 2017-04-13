import React, { Component } from 'react';
import '../css/app.css';
import Broadcasters from './Broadcasters';

class BroadcasterContainer extends Component {
  render() {
    return (
      <div className="BroadcasterContainer">
        <div className="B">
          <Broadcasters />
        </div>
        <div className="B">
          <Broadcasters />
        </div>
        <div className="B">
          <Broadcasters />
        </div>
    </div>
    );
  }
}
export default BroadcasterContainer;
