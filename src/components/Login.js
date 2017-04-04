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
      if (!user.username) {
        alert("Authentication failed. User not found.");
    } else if (user.token) {
      if (user.password != req.body.password) {
        alert("Authentication failed. Wrong password.");
      } else {
        var token = jwt.sign(user, app.get('superSecret'), {
          alert("You're golden.")
        });


      if(this.props.token){
        alert('Yo, you got a token/hey girl hey/nick is awesome');
      } else if {
        alert('Sorry bro.')
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
