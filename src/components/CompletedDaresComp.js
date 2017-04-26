import React, { Component } from 'react';
import '../css/tile.css';
import ReactPlayer from 'react-player';
import { DisplayDare } from 'darity-state';

class CompletedDaresComp extends Component {

  showVid = () => {
    this.props.viewDare(this.props.dare)
    this.props.changePageMode('CompletedDareView')
  }

  render() {
    console.log('hhehehhehkejkdsjfkdjasfoi')
    var self = this;
    console.log(self.props)
    const { dare } = this.props
    if(dare.video_path !== null){
      return (
        <div className="CompletedDaresOverlay VideoTile Tile" onClick={self.showVid}>
          <a className="TileLink">
            <ReactPlayer url={dare.video_path} playing={false} loop={false} height="100%" width="100%" className="VideoPlayer" />
            <h1>{dare.title}</h1>
            <p>{dare.description} ...</p>
          </a>
      </div>
      );
    }
  }
}
export default DisplayDare(CompletedDaresComp);

// 89 characters.
