import React, { Component } from 'react';
import '../css/homepage.css';
import ReactPlayer from 'react-player'

class HomepageMainVid extends Component {

  state = {
          compdareBlocks: [],
          video: {}
        }


  componentDidMount() {
    fetch('http://fun-d-backend.herokuapp.com/api/fetch_all_user_dares', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' //content type in mobile = accept
      }
    })
    .then(response=>response.json())
    .then((dares) => {
      var filteredDares = [];
      for(var i = 0; i < dares.result.length; i++){
        if(typeof dares.result[i].video_path !== 'object' && dares.result[i].video_path !== '' && dares.result[i].video_path !== 'undefined'){
          filteredDares.push(dares.result[i])
        }
      }
      this.setState({compdareBlocks: filteredDares});
      var rand = this.state.compdareBlocks[Math.floor(Math.random() * this.state.compdareBlocks.length)];
      this.setState({video: rand})
    })
  }

  render() {

    return (
      <div className='HomepageVid'>
        <ReactPlayer url={this.state.video.video_path} playing loop="true" height="720px" width="100%" className="VideoPlayer" />
        <div className="Caption"> <div><span>Dare Title</span> <span> &nbsp; @username</span></div></div>
      </div>

    );
  }
}
// https://www.npmjs.com/package/react-player
export default HomepageMainVid;
