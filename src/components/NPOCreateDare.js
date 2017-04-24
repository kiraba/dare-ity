import React, { Component } from 'react';

class NPOCreateDare extends Component {
  state = {

  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='textAreaBox'>
	      <div>
        <p>Create a new dare.</p>
        <input type='text' placeholder='Username' value={this.state.name} onChange={this.usernameChange.bind(this)} /> <br />
        <input type='text' placeholder='Email Address' value={this.state.email} onChange={this.emailChange.bind(this)} /> <br />
        <input type='password' placeholder='Password' value={this.state.password} onChange={this.passwordChange.bind(this)} /> <br />
        <textarea type='textarea' id='textarea' placeholder='Tell Us About Yourself' value={this.state.bio} onChange={this.bioChange.bind(this)} /> <br />
        <div className="checkBoxArea">
        <div className='checkbox'><input type='checkbox' value={this.state.is_npo} onClick={this.npoChange.bind(this)} />
        <label for="isNpo">I am a Nonprofit Organization</label></div>
        </div>
        <h3 className='profilePic'>Upload Your Profile Picture <span className='required'>*required</span></h3>
        <input type="file" id="file-input" onChange={this.imageChange.bind(this)} />
        <input type="hidden" id="avatar-url" name="avatar-url" value={this.state.profilepic_path}/>
        <button className='registerButton' type="submit" onClick={this.registerSubmit.bind(this)}>Sign Up</button>
      </div>
      </div>
    );
  }
}

export default NPOCreateDare;
