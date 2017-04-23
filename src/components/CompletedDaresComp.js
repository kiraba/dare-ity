import React, { Component } from 'react';
import '../css/tile.css';

class CompletedDaresComp extends Component {
  render() {
    const { element } = this.props
    return (

    <div className="Tile">
        <a className="TileLink">
        <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ6ewSSo96Fo5SyCISYhQsmHv07iuX-8K1zc_-fXFcV5xet2J33' />
        <h1>{element.title}</h1>
        <p>{element.description} ...</p>
        </a>
    </div>
    );
  }
}
export default CompletedDaresComp;

// 89 characters.
