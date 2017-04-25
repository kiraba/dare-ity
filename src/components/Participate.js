import React, { Component } from 'react';
import {User} from 'darity-state';
import 'whatwg-fetch';
import '../css/app.css';

class Participate extends Component {
  state = {
            threshold: null,
          }

changePageMode(){
    this.props.changePageMode('Homepage')
  }

  participate(){
    fetch('http://fun-d-backend.herokuapp.com/api/update_user_dare', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' //content type in mobile = accept
      },
      body: JSON.stringify({
        name: this.state.name,
        password: this.state.password
      })
    })
    .then(response=>response.json())
    .then((user) => {
      this.props.login(user.name, user.token)
      if (user.token) {
        return this.changePageMode();
      } else {
        return user.message
      }
    })
  }

  render() {
    var self = this
    return (
      <div className='overlayArea'>
      <div className='textAreaBox'>
        <div>
        <p>Agreement of Participation</p>
        <p className='Participate'>Amount required to complete dare? <input type='number' min='1' step='any' placeholder='$0.00' value={this.state.threshold} onChange={(e) => this.setState({threshold: e.target.value})} /></p>
          <div><button className='loginButton' type="submit" onClick={this.participate.bind(this)}>Agree</button> <button className='loginButton' type="submit" onClick={()=>self.props.changePageMode('Homepage')}>Cancel</button></div>
        </div>
      </div>
      </div>
    );
  }
}

export default Participate;