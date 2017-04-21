import React, { Component } from 'react';
import { User } from 'darity-state';
import 'whatwg-fetch';
import { UserProfilePastDare } from './UserProfilePastDare.js';
import { UserProfileCurrentDare } from './UserProfileCurrentDare.js';
import { DisplayUser } from 'darity-state'

class UserProfile extends Component {
  
  
  
  handleUserInfo() {
    fetch('http://fun-d-backend.herokuapp.com/api/fetch_user', {
      method: 'POST'
    }, 
    body: JSON.stringify({
        query: this.state.query
      })
    .then(response=>response.json())
    .then((user) => {
      this.props.profile(user.name, user.bio, user.profilepic_path, )
      if (user) {
        return this.changePageMode();
      } else { 
        return user.message
      }
    })
  }  


  componentWillMount() {
    this.loadData()
  }


  
  render() {
    return (
      <div className="mainContainer">
        <div className="userInfo">
          <div className="fakePic">{profilepic_path}</div>
          <h1>{name}</h1>
          <p>{bio}</p>
        </div>
        <div className="listOfDares">
          {current.map((dare) => <UserProfileCurrentDare dare={dare}/>)}
        </div>
      </div>
    );
  }
}

export default User(UserProfile);
