import React, { Component } from 'react';
import '../css/app.css';

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
	      <p><a onClick={()=>self.props.changePageMode('Homepage')}>Continue To Site</a></p>
	      </div>
      </div>
    );
  }
}
export default Splash;







