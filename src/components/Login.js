import React, { Component } from 'react';
import {User} from 'darity-state';
import 'whatwg-fetch';
import '../css/app.css';

class Login extends Component {
  state = {
            name: '',
            password: ''
          }

changePageMode(){
    this.props.changePageMode('Homepage')
  }

  changeBoxMode(){
    this.props.changeBoxMode('NPOCreateDare')
  }


  loginSubmit(){
    fetch('http://fun-d-backend.herokuapp.com/api/authenticate', {
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
      this.props.login(user.name, user.token, user.id, user.is_npo, user.profilepic_path)
      if (user.token) {
        if (user.is_npo === true) {
          return this.changeBoxMode();
        }
        return this.changePageMode();
      } else {
        return user.message
      }
    })
  }

  render() {
    return (
      <div className='textAreaBox'>
        <div>
        <p>Login</p>
          <input type='text' placeholder='Name' value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} /> <br />
          <input type='password' placeholder='Password' value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} /> <br />
          <button className='loginButton' type="submit" onClick={this.loginSubmit.bind(this)}>Login</button>
        </div>
      </div>
    );
  }
}

export default User(Login);
