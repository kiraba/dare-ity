import React, { Component } from 'react';
import '../css/tile.css';

class CompletedDares extends Component {
  render() {
    return (
    <div className="TilesContainer">
        <div className="Tile CompletedDaresOverlay">
            <a className="TileLink" href="#">
            <img src='https://i.ytimg.com/vi/bq49rFO6CsU/maxresdefault.jpg' />
            <h1>Dare Title</h1>
            <p>Amount Raised: $100</p>
            </a>
        </div>
            <div className="Tile CompletedDaresOverlay">
            <a className="TileLink" href="#">
            <img src='http://sharing.wxyz.com/sharescnn/photo/2016/08/17/the%20rock_1471415436249_44454638_ver1.0_640_480.PNG' />
            <h1>Dare Title</h1>
            <p>Amount Raised: $100</p>
            </a>
        </div>
        <div className="Tile CompletedDaresOverlay">
            <a className="TileLink" href="#">
            <img src='http://eastcoaststories.com/wp-content/uploads/2016/09/Push-1.jpg' />
            <h1>Dare Title</h1>
            <p>Amount Raised: $100</p>
            </a>
        </div>
        <div className="Tile CompletedDaresOverlay">
            <a className="TileLink" href="#">
            <img src='http://www.splashscore.com/wp-content/uploads/140819-ice-bucket-challenge-1949_899e03e1c58b45b56812f96bc79680a6.jpg' />
            <h1>Dare Title</h1>
            <p>Amount Raised: $100</p>
            </a>
        </div>
    </div>
    );
  }
}
export default CompletedDares;

// 89 characters.




