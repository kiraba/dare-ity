import React, { Component } from 'react';
import '../App.css';


class SignUp extends Component {
  render() {
    console.log('We are getting here')
    return (
      <div className='textAreaBox'>
	      <div>
        <p>Sign Up</p>
	      	<input type='text' placeholder='Username' />
          <input type='text' placeholder='Email' />
        	<input type='password' placeholder='Password' />
          <input type='password' placeholder='Confirm Password' />
        	<button className='signUpButton' type="submit" >Sign Up</button> 
	      </div>
      </div>
    );
  }
}
// https://www.npmjs.com/package/react-player
export default SignUp;







