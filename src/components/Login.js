import React, { Component } from 'react';
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
export default Login;







// import React, { Component } from 'react';
// import {User} from 'darity-state';
// import 'whatwg-fetch';

// class Login extends Component {
//   state = {
//             username: '', 
//             password: ''
//           }

//   loginSubmit(){
//     fetch('/authenticate', {
//       method: 'POST', 
//       headers: {
//         'Content-Type': 'application/json' //content type in mobile = accept
//       },
//       body: JSON.stringify({
//         username: this.state.username,
//         password: this.state.password
//       })
//     }).then((user) => {
//       this.props.loginAction(user.username, user.token)
//       if (this.props.token) {
//         return "You are now logged in.";
//       } else { 
//         return user.message
//       }

//     })
//   }

//   render() {
//     return (
//       <div className='Login'>
//         <input type='text' placeholder='Username' value={this.state.username} onChange={(username) => this.setState({username})} />
//         <input type='password' placeholder='Password' value={this.state.password} onChange={(password) => this.setState({password})} />
//         <button className='loginButton' type="submit" onSubmit={this.loginSubmit.bind(this)}>Login</button> 
//       </div>
//     );
//   }
// }

// export default User(Login);
