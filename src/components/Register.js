import React, { Component } from 'react';
import {User} from 'darity-state';
import 'whatwg-fetch';

class Register extends Component {
  state = {
            username: '', 
            email: '',
            password: ''
          }

  usernameChange(e){
    this.setState({username: e.target.value})
  }
  emailChange(e){
    this.setState({email: e.target.value})
  }
  passwordChange(e){
    this.setState({password: e.target.value})
  }

  registerSubmit(){
    fetch('/users', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json' //content type in mobile = accept
      },
      body: JSON.stringify({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
    }).then((user) => {
      this.props.registerAction(user.username, user.email, user.token)
      if (this.props.token) {
        return "Your account has been registered.";
      } else { 
        return user.message;
      }

    })
  }

  render() {
    return (
      <div className='register'>
        <input type='text' placeholder='Username' value={this.state.username} onChange={(username) => this.setState({username})} />
        <input type='text' placeholder='Email Address' value={this.state.email} onChange={(email) => this.setState({email})} />
        <input type='password' placeholder='Password' value={this.state.password} onChange={(password) => this.setState({password})} />
        <button className='registerButton' type="submit" onSubmit={this.registerSubmit.bind(this)}>Login</button> 
      </div>
    );
  }
}

export default User(Register);
