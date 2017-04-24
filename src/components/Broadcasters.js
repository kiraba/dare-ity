import React, { Component } from 'react';
import '../css/tile.css';
import BroadcasterComp from './BroadcasterComp'

class Broadcasters extends Component {
  state = {
          userBlocks: []
        }

  componentDidMount() {
    fetch('http://fun-d-backend.herokuapp.com/api/fetch_all_users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' //content type in mobile = accept
      }
    })
  .then(response=>response.json())
  .then((user) => {
    this.setState({userBlocks: user.result});
  })
  }
  render() {
    return (
    <div className="TilesContainer">
    {this.state.userBlocks.map((element, i) => (<BroadcasterComp element={element} key={i} />))}
    </div>
    );
  }
}
export default Broadcasters;

// 89 characters.
