import React, { Component } from 'react';
import {User} from 'darity-state';
import 'whatwg-fetch';

class Login extends Component {
  state = {
            username: '', 
            password: ''
          }

  usernameChange(e){
    this.setState({username: e.target.value})
  }
  passwordChange(e){
    this.setState({password: e.target.value})
  }

  loginSubmit(){
    fetch('/authenticate', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json' //content type in mobile = accept
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }).then((user) => {
      this.props.loginAction(user.username, user.token)
      if (this.props.token) {
        return "You are now logged in.";
      } else { 
        return user.message
      }

    })
  }

  render() {
    return (
      <div className='Login'>
        <input type='text' placeholder='Username' value={this.state.username} onChange={this.usernameChange.bind(this)} />
        <input type='password' placeholder='Password' value={this.state.password} onChange={this.passwordChange.bind(this)} />
        <button className='loginButton' type="submit" onSubmit={this.loginSubmit.bind(this)}>Login</button> 
      </div>
    );
  }
}

export default User(Login);
