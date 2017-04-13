import React, { Component } from 'react';
import '../css/broadcaster.css';

class Broadcasters extends Component {
  render() {
  	var self = this;
    var username = '@USERNAME';
    var bio = "This is a free online calculator which counts the number of characters or letters in a text, useful for your tweets on Twitter, as well as a multitude of other applications. And how many characters you use.";
    return (
      <div className="Broadcaster-bio-container">
        <div>
          <img className="bio-photo" src="http://bsoft.fr/story/wp-content/uploads/2016/09/about-thumbnail-placeholder.png" alt="Profile Picture"/>
          <h1 className="broadcasterUsername">{username}</h1>
          <p className="broadcaster-bio">{bio}</p> 
        </div>
    </div>
    );
  }
}
export default Broadcasters;

// bio limit: 200 characters.

