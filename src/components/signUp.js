import React, { Component } from 'react';
import '../css/app.css';


class SignUp extends Component {
  render() {
    console.log('We are getting here')
    return (
      <div className='textAreaBox'>
	      <div>
        <p>Sign Up</p>
	      	<input type='text' placeholder='Username' /> <br />
          <input type='text' placeholder='Email' /> <br />
        	<input type='password' placeholder='Password' /> <br />
          <input type='password' placeholder='Confirm Password' /> <br />
        	<button className='signUpButton' type="submit" >Sign Up</button> 
	      </div>
      </div>
    );
  }
}
// https://www.npmjs.com/package/react-player
export default SignUp;







