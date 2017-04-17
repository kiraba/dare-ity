import React, { Component } from 'react';
import '../css/homepage.css';
import ReactPlayer from 'react-player'

class HomepageMainVid extends Component {
  render() {
    return (
      <div className='HomepageVid'>
        <ReactPlayer url='https://youtu.be/nPoSDRvqyUg' playing loop="true" width='100%' height="720px" />
        <div className="Caption"> <div><span>Dare Title</span> <span> &nbsp; @username</span></div></div>
      </div>

    );
  }
}
// https://www.npmjs.com/package/react-player
export default HomepageMainVid;


