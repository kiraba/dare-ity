import React, { Component } from 'react';
import {User} from 'darity-state';
import 'whatwg-fetch';
import '../css/splash.css';
import '../css/completeDare.css';
import { DisplayDare } from 'darity-state';

class CompleteDare extends Component {
  state = {
            path: null,
          }

changePageMode(){
    this.props.history.push('/homepage')
  }

  uploadVid(){
    console.log(this.props, 'token')
    fetch('http://fun-d-backend.herokuapp.com/api/update_user_dare', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' //content type in mobile = accept
      },
      body: JSON.stringify({
        id: this.props.currentDare.user_dare_id,
        token: this.props.token,
        video_path: this.state.path
      })
    })
    .then(response=>response.json())
    .then((upload) => {
      if (upload.success === true) {
          alert('Your video path has been successfully uploaded.');
          this.props.history.push('/homepage');
      } else {
        alert('Something went wrong. Please try again.')
      }
    })
  }

  render() {
    var self = this
    return (
      <div className='overlayArea'>
      <div className='textAreaBox'>
        <div>
        <p className='Upload'>Paste URL here. <input type='text'  value={this.state.path} onChange={(e) => this.setState({path: e.target.value})} /></p>
          <div><button className='submitButton' type="submit" onClick={this.uploadVid.bind(this)}>Submit</button></div>
        </div>
      </div>
      </div>
    );
  }
}

export default DisplayDare(User(CompleteDare));
