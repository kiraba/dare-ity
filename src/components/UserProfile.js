import React, { Component } from 'react';
import { User } from 'darity-state';
import { DisplayUser } from 'darity-state'
import UserDares from './userDares'
import ActiveDares from './ActiveDares'
import 'whatwg-fetch';
import _ from 'lodash'

import '../css/userprofile.css'

class UserProfile extends Component {

    state = {}

    componentWillMount(){
      const id = _.get(this, 'props.match.params.userId')
      if (id){
        fetch('http://fun-d-backend.herokuapp.com/api/fetch_user/' + id)
        .then(results => results.json())
        .then(user => this.props.viewProfile(user.result[0]))
      }
    }

      dareExist () {
        const activeDares = _.get(this, 'props.currentProfile.dares', [])
              .filter(dare => !dare.video_path)
        if(activeDares.length > 0){
              return activeDares
                    .map((dare, i) => (<ActiveDares {...this.props } dare={dare}  key={i} />))
        } else {
          return <div className='NoVid'><div> @{this.props.currentProfile.name} does not have any active dares. </div></div>
        }
      }
      completeExist () {
        const dareVid = _.get(this, 'props.currentProfile.dares', [])
              .filter(dare => dare.video_path)
        if(dareVid.length > 0){
              return dareVid
              .map((dare, i) => (<UserDares dare={dare}  key={i} />))
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
          <div className='NoBackground DareInView'>
            {this.dareExist()}
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
