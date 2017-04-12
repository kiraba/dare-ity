import React, { Component } from 'react';
import '../css/app.css';

class Broadcasters extends Component {
  render() {
  	var self = this;
    var username = 'Mary';
    var bio = "This is a bio";
    return (
      <div className="Broadcaster">
        <div>
          <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSO1KwKx8bQGfbD1g1wfCL6253bZNHGko-TPEUdpmvBzBjiDg-Wfw" alt="" height="200px" width="200px"/>
          <h1>{username}</h1>
          <p>{bio}</p>
        </div>
    </div>
    );
  }
}
export default Broadcasters;
