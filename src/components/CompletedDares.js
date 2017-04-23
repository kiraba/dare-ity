import React, { Component } from 'react';
import '../css/tile.css';
import CompletedDaresComp from './CompletedDaresComp'

class CompletedDares extends Component {

  state = {
          compdareBlocks: []
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
    var filteredDares = [];
    for(var i = 0; i < dares.result.length; i++){
      console.log('a;ls--------------skdjf', dares.result[i].video_path)
      if(dares.result.video_path !== null){
        //console.log('a;lsdkjfa;lksdjf;alskdjf;lskdjf', dares.result[i])
        filteredDares.push(dares.result[i])
      } else{}
    }
    console.log('filteredDares', filteredDares)
    this.setState({compdareBlocks: filteredDares})
    console.log('this.state.compdareBlocks', this.state.compdareBlocks)
  })
  }

  sorter (element) {
      return (
        <CompletedDaresComp element={element} key={element.id} />
      )
  }

  render() {
    return (
    <div className="TilesContainer">
    {this.state.compdareBlocks.map(this.sorter)}
    </div>
    );
  }
}
export default CompletedDares;

// 89 characters.
