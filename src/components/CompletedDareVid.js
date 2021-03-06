import React, { Component } from 'react';
import '../css/homepage.css';
import '../css/completeddarevid.css';
import ReactPlayer from 'react-player';
import _ from 'lodash';
import {DisplayDare} from 'darity-state';

class CompletedDareVid extends Component {

  render() {

    return (
      <div className='HomepageVid'>
        <ReactPlayer url={this.props.currentDare.video_path} playing loop={true} height="720px" width="100%" className="VideoPlayer" />
        <div className="Caption"> <div><img className='thumbnail' src={this.props.currentDare.image_path} /><div className='alignbottom'><span>{this.props.currentDare.title}</span> <span> &nbsp; @{this.props.currentDare.name}</span></div></div></div>
      </div>
    );
  }
}
// https://www.npmjs.com/package/react-player
export default DisplayDare(CompletedDareVid);
