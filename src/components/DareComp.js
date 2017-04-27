import React, { Component } from 'react';
import '../css/tile.css';
import { DisplayDare } from 'darity-state';

class DareComp extends Component {

  showDare = () => {
    console.log('here', this.props.dare)
    this.props.viewDare(this.props.dare)
    this.props.changePageMode('DareView')
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
        <p>{dare.description}</p>
        </a>
    </div>
    );
  }
}
export default DisplayDare(DareComp);

// 89 characters.

// <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ6ewSSo96Fo5SyCISYhQsmHv07iuX-8K1zc_-fXFcV5xet2J33' alt={""}/>
// <div className="Tile">
//     <a className="TileLink" href="#">
//     <img src='https://s-media-cache-ak0.pinimg.com/originals/d0/3c/85/d03c85254cb216393d931ca6316e5c91.jpg' />
//     <h1>Dare Name</h1>
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt purus eget nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt purus eget nunc</p>
//     </a>
// </div>
//     <div className="Tile">
//     <a className="TileLink" href="#">
//     <img src='https://s-media-cache-ak0.pinimg.com/originals/16/85/b2/1685b259996d8e585ddf47754c282faa.jpg' />
//     <h1>Dare Name</h1>
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt purus eget nunc ...</p>
//     </a>
// </div>
// <div className="Tile">
//     <a className="TileLink" href="#">
//     <img src='http://www.seasonson4th.com/wp-content/uploads/2016/04/mule-deer-foundation-rattlesnake-mt-chapter-banque-84.jpeg' />
//     <h1>Dare Name</h1>
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt purus eget nunc ...</p>
//     </a>
// </div>
// <div className="Tile">
//     <a className="TileLink" href="#">
//     <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ6ewSSo96Fo5SyCISYhQsmHv07iuX-8K1zc_-fXFcV5xet2J33' />
//     <h1>Dare Name</h1>
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt purus eget nunc ...</p>
//     </a>
// </div>
