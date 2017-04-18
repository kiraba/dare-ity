import React, { Component } from 'react';
import '../css/app.css';
import {User} from 'darity-state';
import 'whatwg-fetch';


class SignUp extends Component {
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
    console.log('We are getting here')
    return (
      <div className='textAreaBox'>
	      <div>
        <p>Sign Up</p>
        <input type='text' placeholder='Username' value={this.state.username} onChange={(username) => this.setState({username})} /> <br />
        <input type='text' placeholder='Email Address' value={this.state.email} onChange={(email) => this.setState({email})} /> <br />
        <input type='password' placeholder='Password' value={this.state.password} onChange={(password) => this.setState({password})} /> <br />
        <button className='registerButton' type="submit" onSubmit={this.registerSubmit.bind(this)}>Sign Up</button> 
      </div>
      </div>
    );
  }
}
// https://www.npmjs.com/package/react-player
export default SignUp;







