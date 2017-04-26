import React, { Component } from 'react';
import '../css/homepage.css';
import ReactPlayer from 'react-player'
import _ from 'lodash'

class HomepageMainVid extends Component {

  state = {
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
      const filteredDares = dares.result.filter(res => typeof res.video_path === 'string' && res.video_path)
      var rand = filteredDares[Math.floor(Math.random() * filteredDares.length)];
      this.setState({
                     video: rand ? rand : {}})
    })
  }

  render() {

    return (
      <div className='HomepageVid'>
        <ReactPlayer url={this.state.video.video_path} playing loop={true} height="720px" width="100%" className="VideoPlayer" />
        <div className="Caption"> <div><span>{this.state.video.title}</span> <span> &nbsp; @{this.state.video.name}</span></div></div>
      </div>

    );
  }
}
// https://www.npmjs.com/package/react-player
export default HomepageMainVid;
