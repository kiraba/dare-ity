import React, { Component } from 'react';
import { User } from 'darity-state';
// import '../css/tile.css';
import { DisplayUser } from 'darity-state'
// import '../css/viewdare.css';
import UserDares from './userDares'
import ActiveDares from './ActiveDares'
import 'whatwg-fetch';

import '../css/userprofile.css'

class UserProfile extends Component {

    state = {

          }

      dareExist () {
        const activeDares = this.props.currentProfile.dares
              .filter(dare => !dare.video_path)
        if(activeDares.length > 0){
              return activeDares
                    .map((dare, i) => (<ActiveDares  changePageMode={this.props.changePageMode} dare={dare}  key={i} />))
        } else {
          return <div> @{this.props.currentProfile.name} does not have any active dares. </div>
        }
      }
      completeExist () {
        if(this.props.currentProfile.dares.length > 0){
              return this.props.currentProfile.dares.map((dare, i) => (<UserDares dare={dare}  key={i} />))
        } else {
          return <div className='NoVid'><div> @{this.props.currentProfile.name} does not have any completed dares. </div></div>
        }
      }

  render() {
      console.log('props', this.props)

    return (
      <div className="SafeArea">
          <div className='Header'>
            <h1>FUN(d)</h1>
          </div>
          <div className='UserBio'>
              <div className='SquareImage'>
                <img src={this.props.currentProfile.profilepic_path} />
              </div>
              <div className='DareContent'>
                <h2>@{this.props.currentProfile.name}</h2><br />
                <p className='description'>{this.props.currentProfile.bio}</p>
              </div>

          </div>
          <div>
          <h2 className='DareTitle'>Dares to be Funded</h2>
          <div className='DareBox'>
          <div className='NoVid'>
            {this.dareExist()}
          </div>
          </div>
          <div>
          <h2 className='DareTitle'>Completed Dares</h2>
          <div className='NoBackground DareInView'>
            {this.completeExist()}
          </div>
          </div>
          </div>
          </div>
    );
  }
}

export default DisplayUser(User(UserProfile));
