import React, { Component } from 'react';
import {User} from 'darity-state';
import 'whatwg-fetch';
import '../css/splash.css';
import { DisplayDare } from 'darity-state';

class Participate extends Component {
  state = {
            threshold: '',
          }

changePageMode(){
    this.props.changePageMode('Homepage')
  }

  participate(){
    console.log('looking', this.props)
    fetch('http://fun-d-backend.herokuapp.com/api/set_user_dare', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' //content type in mobile = accept
      },
      body: JSON.stringify({
        broadcaster_id: this.props.id,
  			dare_id: this.props.currentDare.id,
  			npo_id: this.props.currentDare.npo_creator,
  			pledge_amount_threshold: this.state.threshold,
        token: this.props.token
				//video_path: null,
      })
    })
    //.then(response=>response.json())
    .then(result=>result.status === 200 ? this.changePageMode() : alert("please try again"))
  }

  render() {
    var self = this
    return (
      <div className='overlayArea'>
      <div className='textAreaBox'>
        <div>
        <p>Agreement of Participation</p>
        <p className='Participate'>Amount required to complete dare? <input type='number' min='1' step='any' placeholder='$0.00' value={this.state.threshold} onChange={(e) => this.setState({threshold: e.target.value})} /></p>
          <div>
          <button className='loginButton' type="submit" onClick={this.participate.bind(this)}>Agree</button>  <button className='loginButton' type="submit" onClick={()=>self.props.changePageMode('Homepage')}>Cancel</button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default DisplayDare(User(Participate));
