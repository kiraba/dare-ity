import React, { Component } from 'react';
import '../css/app.css';
import {User} from 'darity-state';
import 'whatwg-fetch';
import profilePic from '../../public/images/blank-profile-picture.png';

class SignUp extends Component {
    state = {
            name: '',
            email: '',
            password: '',
            is_npo: false,
            profilepic_path: {profilePic}
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
    console.log("this is where we put the url in the database")
    fetch('http://fun-d-backend.herokuapp.com/create_user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' //content type in mobile = accept
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        is_npo: this.state.is_npo,
        profilepic_path: this.state.profilepic_path
      })
    }).then((user) => {
      this.props.registerAction(user.name, user.email, user.is_npo, user.profilepic_path, user.token)
      if (this.props.token) {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Your account has been registered.");
      } else {
        return user.message;
      }

    })
  }

  uploadFile(file, signedRequest, url){
    console.log('this is where we get a signed request' )
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', signedRequest);
    xhr.onreadystatechange = () => {
      if(xhr.readyState === 4){
        if(xhr.status === 200){
          document.getElementById('preview').src = url;
          document.getElementById('avatar-url').value = url;
          this.setState({ profilepic_path: url });
          alert('Good job you did it bud.')
        }
        else{
          alert('Could not upload file.');
        }
      }
    };
    xhr.send(file);
  }

  getSignedRequest(file){
    console.log(file, "THIS IS THE FILE !!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://fun-d-backend.herokuapp.com/sign-s3?file-name=${file.name}&file-type=${file.type}`);
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
  console.log("this is checking to make sure a file is selected")
    document.getElementById("file-input").onchange = () => {
      console.log("potatoes sitting on apples !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
      const files = document.getElementById('file-input').files;
      const file = files[0];
      console.log(file, files, "tell us what file is")
      if(file == null){
        return alert('No file selected.');
      }
      this.getSignedRequest(file);
    }
  }

  render() {
    console.log('This is where we render the signup')
    return (
      <div className='textAreaBox'>
	      <div>
        <p>Sign Up</p>
        <input type='text' placeholder='Username' value={this.state.name} onChange={this.usernameChange.bind(this)} /> <br />
        <input type='text' placeholder='Email Address' value={this.state.email} onChange={this.emailChange.bind(this)} /> <br />
        <input type='password' placeholder='Password' value={this.state.password} onChange={this.passwordChange.bind(this)} /> <br />
        <div className='checkbox'><input type='checkbox' value={this.state.is_npo} onClick={this.npoChange.bind(this)} />
        <label for="isNpo">I'm a Nonprofit Organization</label></div>
        <input type="file" id="file-input" onChange={this.imageChange.bind(this)} /> <br />
        <input type="hidden" id="avatar-url" name="avatar-url" value={profilePic}/>
        <button className='registerButton' type="submit" onSubmit={this.registerSubmit.bind(this)}>Sign Up</button>
      </div>
      </div>
    );
  }
}

export default SignUp;
