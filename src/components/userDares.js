import React, { Component } from 'react';
import '../css/tile.css';
import '../css/viewdare.css';
import '../css/homepage.css';
import ReactPlayer from 'react-player'

class userDares extends Component {
  render() {
    const { dare } = this.props
    console.log('dare', dare)
    if(dare.video_path !== null){
      return (
        <div>
        <h1>Completed Dares</h1>
        <div className='UserDareVid'>
              <ReactPlayer url={dare.video_path} playing={false} loop={false} height="100%" width="100%" className="VideoPlayer" />
              <div className="Caption"> <div><span>Title</span> <span> &nbsp; @NPO</span></div></div>
            </div>
        </div>
      );
    } else {
      return <div></div>
    }
  }
}
export default userDares;

// 89 characters.
