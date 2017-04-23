import React, { Component } from 'react';
import '../css/tile.css';
import CompletedDaresComp from './CompletedDaresComp'

class CompletedDares extends Component {

  state = {
          dareBlocks: []
        }


  componentDidMount() {
    fetch('http://fun-d-backend.herokuapp.com/api/fetch_all_user_dares', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' //content type in mobile = accept
      }
    })
  .then(response=>response.json())
  .then((dares) => {
    this.setState({dareBlocks: dares.result});
    console.log('Completed', dares.result)
  })
  }


  render() {
    return (
    <div className="TilesContainer">
    {this.state.dareBlocks.map((element, i) => (<CompletedDaresComp element = {element} key={i} />))}
    </div>
    );
  }
}
export default CompletedDares;

// 89 characters.
