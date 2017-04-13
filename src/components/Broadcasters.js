import React, { Component } from 'react';
import '../css/broadcaster.css';

class Broadcasters extends Component {
  render() {
  	var self = this;
    var username = 'Mary';
    var bio = "This is a free online calculator which counts the number of characters or letters in a text, useful for your tweets on Twitter, as well as a multitude of other applications. And how many characters you use.";
    return (
      <div className="Broadcaster-bio-container">
        <div>
          <img className="bio-photo" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSO1KwKx8bQGfbD1g1wfCL6253bZNHGko-TPEUdpmvBzBjiDg-Wfw" alt="" height="200px" width="200px"/>
          <h1>{username}</h1>
          <p className="broadcaster-bio">{bio}</p>
        </div>
    </div>
    );
  }
}
export default Broadcasters;
