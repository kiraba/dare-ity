import React, { Component } from 'react';
import './css/app.css';
import Homepage from './components/Homepage';
import SplashPage from './components/SplashPage';
import DareView from './components/DareView'
import Participate from './components/Participate'
import UserProfile from './components/UserProfile'
import CompletedDares from './components/CompletedDares'
import CompletedDareView from './components/CompletedDareView'


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
    } else if (this.state.pageMode === 'DareView'){
      return <DareView changePageMode={this.changePageMode.bind(this)}/>
   } else if (this.state.pageMode === 'Participate'){
      return <Participate changePageMode={this.changePageMode.bind(this)}/>
    } else if (this.state.pageMode === 'UserProfile'){
      return <UserProfile changePageMode={this.changePageMode.bind(this)}/>
    } else if (this.state.pageMode === 'CompletedDares'){
      return <CompletedDares changePageMode={this.changePageMode.bind(this)}/>
    } else if (this.state.pageMode === 'CompletedDareView'){
      return <CompletedDareView changePageMode={this.changePageMode.bind(this)}/>
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
