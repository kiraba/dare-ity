import React, { Component } from 'react';
import { User } from 'darity-state';
import 'whatwg-fetch';

class UserProfilePastDare extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="upperBox">
          <div className="fakeVid">{this.props.dare.videoURL}</div>  //need to actually embed Youtube video using URL
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

export default User(UserProfilePastDare);
