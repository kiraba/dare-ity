import React, { Component } from 'react';
import '../css/splash.css';
import {User} from 'darity-state';
import 'whatwg-fetch';

class NPOCreateDare extends Component {
  state = {
    dareDescription: "",
    dareTitle: ""
  }

  changePageMode() {
    this.props.history.push('/homepage')
  }

  dareDescriptionChange(e){
    this.setState({dareDescription: e.target.value})
  }

  dareTitleChange(e){
    this.setState({dareTitle: e.target.value})
  }

  dareSubmit(){
   fetch('http://fun-d-backend.herokuapp.com/api/create_dare', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json' //content type in mobile = accept
     },
     body: JSON.stringify({
       title: this.state.dareTitle,
       description: this.state.dareDescription,
       npo_creator: this.props.id,
       image_path: this.props.profilepic_path,
       token: this.props.token,
       expiration: '2017-05-12',
       pledge_threshold: 40

     })
   })
   .then(result=>result.status === 200 ? this.changePageMode() : alert("please try again"))
 }


  render() {
    return (
      <div className='textAreaBox'>
	      <div>
          <p>Create a new dare.</p>
          <img className='SquareImage' src={this.props.profilepic_path}  />
          <h1> {this.props.name} </h1> <br />
          <textarea type='textarea' id='textarea' placeholder='Dare Title' value={this.state.dareTitle} onChange={this.dareTitleChange.bind(this)} /> <br />
          <textarea type='textarea' id='textarea' placeholder='Describe Your Dare' value={this.state.dareDescription} onChange={this.dareDescriptionChange.bind(this)} /> <br />
          <button className='registerButton' type="submit" onClick={this.dareSubmit.bind(this)}>Submit Dare</button>
          <div className="continue">
  	         <p><a onClick={()=>this.props.history.push('/homepage')}>Continue To Site</a></p>
  	      </div>
        </div>
      </div>
    );
  }
}

//expiration date not set

export default User(NPOCreateDare);
