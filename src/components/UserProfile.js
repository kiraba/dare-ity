import React, { Component } from 'react';
import { User } from 'darity-state';
import '../css/tile.css';
import { DisplayUser } from 'darity-state'
import '../css/viewdare.css';
import UserDares from './userDares'
import ActiveDares from './ActiveDares'
import 'whatwg-fetch';

class UserProfile extends Component {

    state = {

          }


  render() {
      console.log('props', this.props)
    return (
      <div className="SafeArea">
          <div className='Header'>
            <h1>FUN(d)</h1>
          </div>
          <div className='DareInView'>
              <div className='SquareImage'>
                <img src={this.props.currentProfile.profilepic_path} />
              </div>
              <div className='DareContent'>
                <h1>@{this.props.currentProfile.name}</h1>
                <h2>NPO</h2>
                <p className='description'>{this.props.currentProfile.bio}</p>
              </div>

          </div>
          <div className='DareInView'>
            {this.props.currentProfile.dares.map((dare, i) => (<ActiveDares dare={dare}  key={i} />))}
          </div>
          <div className='NoBackground DareInView'>
            {this.props.currentProfile.dares.map((dare, i) => (<UserDares dare={dare}  key={i} />))}
          </div>
          </div>
    );
  }
}

export default DisplayUser(User(UserProfile));
