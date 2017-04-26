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
  .then((users) => {
    const filteredUsers = users.result.filter(res => res.is_npo === false)
    this.setState({userBlocks: filteredUsers});
  })
  }
  render() {
    return (
    <div className="TilesContainer">
    {this.state.userBlocks.map((user, i) => (<BroadcasterComp changePageMode={this.props.changePageMode} user={user} key={i} />))}
    </div>
    );
  }
}
export default Broadcasters;

// 89 characters.
