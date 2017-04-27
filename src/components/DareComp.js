import React, { Component } from 'react';
import '../css/tile.css';
import { DisplayDare } from 'darity-state';

class DareComp extends Component {

  showDare = () => {
    console.log('here', this.props.dare)
    this.props.viewDare(this.props.dare)
    this.props.history.push('/dareview')
  }

  render() {
    var self = this
    const { dare } = this.props
    return (

    <div className="Tile">
        <a className="DaresOverlay TileLink" onClick={self.showDare}>
        <h5 className='dareBox'>Dare Title</h5>
        <img src={dare.image_path} alt={""}/>
        <h1>{dare.title}</h1>
        <p>{dare.description} ...</p>
        </a>
    </div>
    );
  }
}
export default DisplayDare(DareComp)