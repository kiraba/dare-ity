import React, { Component } from 'react';
import { User } from 'darity-state';
import 'whatwg-fetch';

class UserProfileCurrentDare extends Component {
  

  handleUserDare() {
    fetch('http://fun-d-backend.herokuapp.com/api/fetch_all_user_dares', {
      method: 'POST'
    }, 
    body: JSON.stringify({
        query: this.state.query
      })
    .then(response=>response.json())
    .then((user) => {
      this.props.ACTIONREDUCERDISPATCHEDNAME(user.name, user.bio, user.profilepic_path)
      if (user) {
        return this.changePageMode();
      } else { 
        return user.message
      }
    })
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="upperBox">
          <div className="fakePic">{this.props.dare.profilepic_path}</div>
          <h2>{title}</h2>
          <p>{description}</p>
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
