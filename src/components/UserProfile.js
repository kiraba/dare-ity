import React, { Component } from 'react';
import { User } from 'darity-state';
import 'whatwg-fetch';
// import { UserProfilePastDare } from './UserProfilePastDare.js';
// import { UserProfileCurrentDare } from './UserProfileCurrentDare.js';
// import { DisplayUser } from 'darity-state'

class UserProfile extends Component {

    state = {

          }

    // const { element } = this.props
    // console.log('element', element)

    componentDidMount() {
      fetch('http://fun-d-backend.herokuapp.com/api/fetch_all_users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' //content type in mobile = accept
        },
      })
    .then(response=>response.json())
    .then((users) => {
      console.log('users', users)
    })
    }




  render() {
    return (
      <div className="mainContainer">
        <div className="userInfo">
        </div>
        <div className="listOfDares">

        </div>
      </div>
    );
  }
}

export default User(UserProfile);

// {current.map((dare) => <UserProfileCurrentDare dare={dare}/>)}

// fetch('http://fun-d-backend.herokuapp.com/api/fetch_user', {
//   method: 'POST'
// },
// body: JSON.stringify({
//     query: this.state.query
//   })
// .then(response=>response.json())
// .then((user) => {
//   this.props.profile(user.name, user.bio, user.profilepic_path, )
//   if (user) {
//     return this.changePageMode();
//   } else {
//     return user.message
//   }
// })
