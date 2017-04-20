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
            profilepic_path: {profilePic}, 
            file: ''
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
    this.getSignedRequest()
        .then((picUrl) => {
          console.log('the state', this.state);
          console.log('picUrl',picUrl)
          fetch('http://fun-d-backend.herokuapp.com/api/create_user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json' //content type in mobile = accept
            },
            body: JSON.stringify({
              name: this.state.name,
              email: this.state.email,
              password: this.state.password,
              is_npo: this.state.is_npo,
              profilepic_path: picUrl
            })
          })
          .then(response=>response.json())
          .then((user) => {
            console.log(user)
            this.props.register(user.name, user.email, user.is_npo, user.profilepic_path, user.token)
            if (this.props.token) {
              console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Your account has been registered.");
            } else {
              return user.message;
            }
          })
        })
  }

  uploadFile(file, signedRequest, url){
    return new Promise((resolve, reject) => {
        console.log(file, signedRequest, url, 'Hiiiiiiiii');
      const xhr = new XMLHttpRequest();
      xhr.open('PUT', signedRequest);
      xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
          if(xhr.status === 200){
            resolve(url)
          } else {
            alert('Could not upload file.');
            reject('Could not upload File')
          }
        }
      }
      xhr.send(file);
    })
  }

  getSignedRequest(){
    const { file } = this.state;
    return fetch(`http://fun-d-backend.herokuapp.com/sign-s3?file-name=${file.name}&file-type=${file.type}`, {
          method: 'GET'
        })
    .then((response) => response.json())
    .then(data => {
          //if(response.status === 200) {
            console.log('data', data, this.state.file)
            return this.uploadFile(file, data.signedRequest, data.url);
          // } else {
          //   alert('There was a problem, please try again.')
          // }
      });
  }

  imageChange(e) {
    const reader = new FileReader();
    const file = e.target.files[0];
    console.log(file);
    reader.onload = (upload) => {
      console.log('file', file)
      this.setState({ file });
    };
    reader.readAsDataURL(file);
  }

  render() {
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
        <input type="hidden" id="avatar-url" name="avatar-url" value={this.state.profilepic_path}/>
        <button className='registerButton' type="submit" onClick={this.registerSubmit.bind(this)}>Sign Up</button>
      </div>
      </div>
    );
  }
}

export default User(SignUp);
