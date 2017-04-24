import React, { Component } from 'react';
import '../css/tile.css';

class DareComp extends Component {
  render() {
    var self = this;
    const { element } = this.props
    return (

    <div className="Tile">
        <a className="DaresOverlay TileLink" onclick={()=>self.props.changePageMode('ViewDare')}>
        <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ6ewSSo96Fo5SyCISYhQsmHv07iuX-8K1zc_-fXFcV5xet2J33' alt={""}/>
        <h1>{element.title}</h1>
        <p>{element.description} ...</p>
        </a>
    </div>
    );
  }
}
export default DareComp;

// 89 characters.


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
