import React, { Component } from 'react';
import '../css/broadcaster.css';


class Broadcasters extends Component {
  render() {
  	var self = this;
    var username = '@USERNAME';
    var bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed est massa. Curabitur pharetra tristique enim in ornare. Praese";
    return (
      <div className="Broadcaster-bio-container">
        <div>
          <img className="bio-photo" src="http://bsoft.fr/story/wp-content/uploads/2016/09/about-thumbnail-placeholder.png" alt="Profile Picture"/>
          <div className="broadcaster-bio">
          <h2>{username}</h2>
          <p >{bio}</p> 
          </div>
        </div>
    </div>
    );
  }
}
export default Broadcasters;

// bio limit: 130 characters.


