/*import React, { Component } from 'react';
import '../css/app.css';

class Login extends Component {
  render() {
    return (
      <div className='textAreaBox'>
	      <div>
        <p>Login</p>
          <input type='text' placeholder='Email' /> <br />
          <input type='password' placeholder='Password' /> <br />
          <button className='signUpButton' type="submit" >Login</button> 
        </div>
      </div>
    );
  }
}
// https://www.npmjs.com/package/react-player
export default Login;*/


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
      this.props.login(user.name, user.token)
      if (user.token) {
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
          <button className='signUpButton' type="submit" onClick={this.loginSubmit.bind(this)}>Login</button> 
        </div>
      </div> 
    );
  }
}

export default User(Login);
