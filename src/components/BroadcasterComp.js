import React, { Component } from 'react';
import '../css/tile.css';
import { DisplayUser } from 'darity-state'

class BroadcasterComp extends Component {

  viewUser = () => {
    this.props.viewProfile(this.props.user)
    this.props.history.push('/userprofile')
  }

  render() {
    const { user } = this.props
    return (

    <div className=" BroadcastersOverlay Tile">
        <a className="TileLink" onClick={this.viewUser}>
        <img src={user.profilepic_path} alt={""}/>
        <h1>@{user.name}</h1>
        <p>{user.bio} ...</p>
        </a>
    </div>
    );
  }
}
export default DisplayUser(BroadcasterComp);


// <div className="Tile BroadcastersOverlay">
//     <a className="TileLink" href="#">
//     <img src='https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/13537702_10209939099652898_8907788068611790849_n.jpg?oh=51fffe601ea84eb5ebf68f2997ff8956&oe=598447C4' />
//     <h1>@username</h1>
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt purus eget nunc ...</p>
//     </a>
// </div>
