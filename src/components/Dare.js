import React, { Component } from 'react';
import '../css/tile.css';
import DareComp from './DareComp'

class Dare extends Component {
  state = {
          dareBlocks: []
        }

  componentDidMount() {
    fetch('http://fun-d-backend.herokuapp.com/api/fetch_all_dares', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' //content type in mobile = accept
      }
    })

  .then(response=>response.json())
  .then((dares) => {
    this.setState({dareBlocks: dares.result});
  })


  }

  render() {
    return (
    <div className="TilesContainer">
      {this.state.dareBlocks.map((dare, i) => (<DareComp changePageMode={this.props.changePageMode} dare={dare} key={i} />))}
    </div>
    );
  }
}
export default Dare;

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
