import React, { Component } from 'react';
import '../css/app.css';
import {User} from 'darity-state';
import 'whatwg-fetch';

class NPOCreateDare extends Component {
  state = {
    dareDescription: "",
    dareTitle: ""

  }

  componentDidMount() {

  }

  dareDescriptionChange(e){
    this.setState({dareDescription: e.target.value})
  }

  dareTitleChange(e){
    this.setState({dareTitle: e.target.value})
  }

  // dareSubmit(){
  //   fetch('http://fun-d-backend.herokuapp.com/api/create_dare', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json' //content type in mobile = accept
  //     },
  //     body: JSON.stringify({
  //       title: this.state.dareTitle,
  //       description: this.state.dareDescription,
  //       npo_creator: this.props.id,
  //       image_path: this.props.profilepic_path
  //     })
  //     .then(response=>response.json())
  //   })
  // }


  render() {
    console.log(this.state.profilepic_path)
    return (
      <div className='textAreaBox'>
	      <div>
          <p>Create a new dare.</p>
          <img src={this.props.profilepic_path}  />
          <h1> {this.props.name} </h1> <br />
          <textarea type='textarea' id='textarea' placeholder='Dare Title' value={this.state.dareTitle} onChange={this.dareTitleChange.bind(this)} /> <br />
          <textarea type='textarea' id='textarea' placeholder='Describe Your Dare' value={this.state.dareDescription} onChange={this.dareDescriptionChange.bind(this)} /> <br />
        </div>
      </div>
    );
  }
}

//expiration date not set

{/* <button className='registerButton' type="submit" onClick={this.dareSubmit.bind(this)}>Submit Dare</button> */}

export default User(NPOCreateDare);
