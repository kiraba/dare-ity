import React, { Component } from 'react';
import { User } from 'darity-state';
import 'whatwg-fetch';

class UserProfileCurrentDare extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="upperBox">
          <div className="fakePic">{this.props.dare.npoLogo}</div>
          <h2>{this.props.dare.name}</h2>
          <p>{this.props.dare.info}</p>
        </div>
        <div className="lowerBox">
          <p>Share</p>
          <p>Donate</p>
          <p>expand...</p>
        </div>
      </div>
    );
  }
}

export default User(UserProfileCurrentDare);
