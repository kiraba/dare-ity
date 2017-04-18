import React, { Component } from 'react';
import '../css/app.css';
import {User} from 'darity-state';
import 'whatwg-fetch';
import profilePic from '../../public/images/blank-profile-picture';

class SignUp extends Component {
    state = {
            name: '', 
            email: '',
            password: '', 
            is_npo: false, 
            file: {profilePic}
          }

  usernameChange(e){
    this.setState({name: e.target.value})
  }

  emailChange(e){
    this.setState({email: e.target.value})
  }

  passwordChange(e){
    this.setState({password: e.target.value})
  }

  npoChange(e){
    this.setState({is_npo: e.target.boolean})
  }


  registerSubmit(){
    fetch('/create_user', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json' //content type in mobile = accept
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password, 
        is_npo: this.state.is_npo, 
        file: this.state.file
      })
    }).then((user) => {
      this.props.registerAction(user.name, user.email, user.is_npo, user.file, user.token)
      if (this.props.token) {
        return "Your account has been registered.";
      } else { 
        return user.message;
      }

    })
  }
  
  uploadFile(file, signedRequest, url){
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', signedRequest);
    xhr.onreadystatechange = () => {
      if(xhr.readyState === 4){
        if(xhr.status === 200){
          document.getElementById('preview').src = url;
          document.getElementById('avatar-url').value = url;
        }
        else{
          alert('Could not upload file.');
        }
      }
    };
    xhr.send(file);
  }

  getSignedRequest(file){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `/sign-s3?file-name=${file.name}&file-type=${file.type}`);
    xhr.onreadystatechange = () => {
      if(xhr.readyState === 4){
        if(xhr.status === 200){
          const response = JSON.parse(xhr.responseText);
          this.uploadFile(file, response.signedRequest, response.url);
        }
        else{
          alert('Could not get signed URL.');
        }
      }
    };
    xhr.send();
  }

  imageChange() {
    document.getElementById("file-input").onchange = () => {
      const files = document.getElementById('file-input').files;
      const file = files[0];
      if(file == null){
        return alert('No file selected.');
      }
      this.getSignedRequest(file);
    }
  }

  render() {
    console.log('We are getting here')
    return (
      <div className='textAreaBox'>
	      <div>
        <p>Sign Up</p>
        <input type='text' placeholder='Username' value={this.state.name} onChange={(name) => this.setState({name})} /> <br />
        <input type='text' placeholder='Email Address' value={this.state.email} onChange={(email) => this.setState({email})} /> <br />
        <input type='password' placeholder='Password' value={this.state.password} onChange={(password) => this.setState({password})} /> <br />
        <input type='checkbox' value={this.state.is_npo} onClick={this.npoChange.bind(this)} /> <br />
          <label for="isNpo">Check if you are a Nonprofit Organization</label>
        <p id="status">Please upload a profile picture</p>
        <input type="file" id="file-input" onChange={this.imageChange.bind(this)} /> <br />
        <input type="hidden" id="avatar-url" name="avatar-url" value={profilePic}/>
        <button className='registerButton' type="submit" onSubmit={this.registerSubmit.bind(this)}>Sign Up</button> 
      </div>
      </div>
    );
  }
}

export default SignUp;







