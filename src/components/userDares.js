import React, { Component } from 'react';
import '../css/userprofile.css';
import ReactPlayer from 'react-player'

class userDares extends Component {
  render() {
    const { dare } = this.props
    console.log('dare', dare)
      return (
        <div>
        <div className='UserDareVid'>
              <div className='videoHolder'>
              <ReactPlayer url={dare.video_path} playing={false} loop={false} height="250px" width="100%" className="VideoPlayer" />
              </div>
              <div className="Caption"> <div><span>{dare.title}</span> <span> &nbsp; @{dare.npo_name}</span></div></div>
            </div>
        </div>
      );
  }
}
export default userDares;

// 89 characters.
