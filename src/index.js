import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from './App';
import Homepage from './components/Homepage';
import SplashPage from './components/SplashPage';
import DareView from './components/DareView';
import Participate from './components/Participate';
import UserProfile from './components/UserProfile';
import CompletedDares from './components/CompletedDares';
import CompletedDareView from './components/CompletedDareView';
import Login from './components/Login';
import SignUp from './components/signUp';
import NPOCreateDare from './components/NPOCreateDare';
import ActiveDares from './components/ActiveDares'
import './index.css';
import {store} from 'darity-state';
import {Provider} from 'react-redux';

ReactDOM.render((
	<Provider store={store}>
  	<Router>
	    <div>
        <Route exact path="/" component={SplashPage}/>
        <Route path="/homepage" component={Homepage}/>
        <Route path="/dareview" component={DareView}/>
        <Route path="/participate" component={Participate}/>
        <Route path="/userprofile/:userId?" component={UserProfile}/>
        <Route path="/completeddares" component={CompletedDares}/>
        <Route path="/completeddareview" component={CompletedDareView}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/npocreatedare" component={NPOCreateDare}/>
        <Route path="/donate/:userDareId" component={ActiveDares} />
      </div>
  	</Router>
  </Provider>
	), document.getElementById('root')
);
