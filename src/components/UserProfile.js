import React, { Component } from 'react';
import { User } from 'darity-state';
import 'whatwg-fetch';
import { UserProfilePastDare } from './UserProfilePastDare.js';
import { UserProfileCurrentDare } from './UserProfileCurrentDare.js';
import { DisplayUser } from 'darity-state'

class UserProfile extends Component {
  loadData = () => fetch('/api/fetch_user')
                    .then(user => this.props.viewProfile(user))
  
  componentWillMount() {
    this.loadData()
  }
  
  render() {
    const {pic, username, current, past, info} = this.props.currentProfile;
    return (
      <div className="mainContainer">
        <div className="userInfo">
          <div className="fakePic">{pic}}</div>
          <h1>{username}</h1>
          <p>{info}</p>
        </div>
        <div className="listOfDares">
          {current.map((dare) => <UserProfileCurrentDare dare={dare}/>)}
          {past.map((dare) => <UserProfilePastDare dare={dare}/>)}
        </div>
      </div>
    );
  }
}

export default DisplayUser(UserProfile);
