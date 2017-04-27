import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import '../css/splash.css';

class Splash extends Component {
  render() {
  	var self = this
    return (
      <div className='textAreaBox'>
	      <div>
	      <p><span className='login'><a onClick={()=>self.props.changeBoxMode('Login')}>Login</a></span>or
	         <span className='signUp'><a onClick={()=>self.props.changeBoxMode('SignUp')}>Sign Up</a></span></p>
	      </div>
	      <div className="continue">
	      <p><Link to='/homepage'>Continue To Site</Link></p>
	      </div>
      </div>
    );
  }
}
export default Splash;
