import React, { Component } from 'react';
import '../css/tile.css';
import ReactPlayer from 'react-player'

class CompletedDaresComp extends Component {
  render() {
    const { element } = this.props
    console.log('vid', element)
    if(element.video_path !== null){
      return (
        <div className="CompletedDaresOverlay VideoTile Tile">
          <a className="TileLink">
            <ReactPlayer url={element.video_path} playing={false} loop={false} height="100%" width="100%" className="VideoPlayer" />
            <h1>{element.title}</h1>
            <p>{element.description} ...</p>
          </a>
      </div>
      );
    }
  }
}
export default CompletedDaresComp;

// 89 characters.
