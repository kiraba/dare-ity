import React, { Component } from 'react';
import '../css/tile.css';

class BroadcasterComp extends Component {
  render() {
    const { element } = this.props
    return (

    <div className="Tile">
        <a className="TileLink" href="#">
        <img src={element.profilepic_path} alt={""}/>
        <h1>{element.name}</h1>
        <p>{element.bio} ...</p>
        </a>
    </div>
    );
  }
}
export default BroadcasterComp;


// <div className="Tile BroadcastersOverlay">
//     <a className="TileLink" href="#">
//     <img src='https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/13537702_10209939099652898_8907788068611790849_n.jpg?oh=51fffe601ea84eb5ebf68f2997ff8956&oe=598447C4' />
//     <h1>@username</h1>
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt purus eget nunc ...</p>
//     </a>
// </div>
