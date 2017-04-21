import React, { Component } from 'react';
import './css/app.css';
import Homepage from './components/Homepage';
import SplashPage from './components/SplashPage';
import ViewDare from './components/ViewDare';


class App extends Component {
  constructor(){
    super()
    this.state = {
      pageMode: 'SplashPage'
    }
  }


  changePageMode(pageMode){
    this.setState({pageMode: pageMode});
  }

  pageMode(){
    if(this.state.pageMode === 'SplashPage'){
      return <SplashPage changePageMode={this.changePageMode.bind(this)}/>
    } else if (this.state.pageMode === 'Homepage'){
      return <Homepage changePageMode={this.changePageMode.bind(this)} />
    } else if (this.state.pageMode === 'ViewDare'){
     return <ViewDare changePageMode ={this.changePageMode.bind(this)}/>
    }
  }
  render() {
    return (
      <div>
        {this.pageMode()}
      </div>

    );
  }
}
export default App;
