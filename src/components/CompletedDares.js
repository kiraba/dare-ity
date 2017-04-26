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
        if(typeof dares.result[i].video_path !== 'object' && dares.result[i].video_path !== '' && dares.result[i].video_path !== 'undefined'){
          filteredDares.push(dares.result[i])
        }
      }
      this.setState({compdareBlocks: filteredDares})
    })
  }


  renderCompletedDares(element, i) {
    return (
      <CompletedDaresComp changePageMode={self.props.changePageMode} dare={dare} key={i} />
    )
  }


  render() {
    return (
      <div className="TilesContainer">
        {this.state.compdareBlocks.map((dare, i) => this.renderCompletedDares(dare, i))}

      </div>
    );
  }
}

export default CompletedDares;

// 89 characters.
