import React from 'react';
import ReactDOM from 'react-dom';
import {store} from 'darity-state';
import {Provider} from 'react-redux';
import App from '../src/App';
import Login from '../src/components/Login';
import Register from '../src/components/Register';
import UserProfile from '../src/components/UserProfile';
import UserProfilePastDare from '../src/components/UserProfilePastDare';
import UserProfileCurrentDare from '../src/components/UserProfileCurrentDare';
import { loginAction, registerAction, displayUserAction } from '../../darity-state/src/redux/actions';
import actions from '../../darity-state/src/redux/actions';
import loginReducer from '../../darity-state/src/redux/reducer';

//Test that all the components render//

it('renders App component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render( 
  		<Provider store={store}>
  			<App/>
  		</Provider>
  	, div);
});

it('renders Login component without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider store={store}>
			<Login/>
		</Provider>
	, div);
});

it('renders Register component without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider store={store}>
			<Register/>
		</Provider>
	, div);
});

it('renders UserProfile component without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider store={store}>
			<UserProfile/>
		</Provider>
	, div);
});

it('renders UserProfilePastDare component without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider store={store}>
			<UserProfilePastDare/>
		</Provider>
	, div);
});

it('renders UserProfileCurrentDare component without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider store={store}>
			<UserProfileCurrentDare/>
		</Provider>
	, div);
});

//Test Actions//

describe('actions', () => {
   it('returns username and token for Login action', () => {
   		const username = 'bob'
   		const token = 1
        const expectedAction = {
           type: 'Login',
           username: username,
           token: token
       }
       expect(actions.loginAction(username, token)).toEqual(expectedAction)
   })
});

describe('actions', () => {
   it('returns username, email, and token for Register action', () => {
   		const username = 'bob'
   		const email = 'bob@gmail.com'
   		const token = 1
        const expectedAction = {
           type: "Register",
           username: username,
           email: email,
           token: token
       }
       expect(actions.registerAction(username, email, token)).toEqual(expectedAction)
   })
});

//Test Reducers//

it('should handle Login', () => {
	const type = { type: 'Login'};
	const stateAfter = {
   		username: actions.username,
   		token: actions.token
	};
	expect(loginReducer(undefined, {
   		type: 'Login'
	})).toEqual(stateAfter)
});

it('should handle Logout', () => {
    const stateAfter = {
       	username: undefined,
       	token: undefined
   	};
   	const stateBefore = {
   	   	username: actions.username,
   	    token: actions.token
   	};
   	expect(loginReducer(stateBefore, {
       	type: 'Login'
   	})).toEqual(stateAfter)
})

it('should handle DisplayUser', () => {
	const stateAfter = {
   		profile: actions.profile
	};
	expect(loginReducer(undefined, {
   		type: 'DisplayUser'
	})).toEqual(stateAfter)
});

it('should handle Register', () => {
	const type = { type: 'Register'};
	const stateAfter = {
   		username: actions.username,
   		email: actions.email,
   		token: actions.token
	};
	expect(loginReducer(undefined, {
   		type: 'Register'
	})).toEqual(stateAfter)
});



