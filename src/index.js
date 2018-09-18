import React from 'react';
import ReactDOM from 'react-dom';
// REACT-ROUTER 
import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from './firebase';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

// CHECKING IF USER IS LOGGED IN OR NOT
firebaseApp.auth().onAuthStateChanged(user => {
    if(user){
        console.log('user has signed in or up', user);
    }
    else {
        console.log('user has signed out or still needs to sgn in');
    }
})

ReactDOM.render(
    <Router path="/" history={browserHistory}>
        <Route path="/app" component={App}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
    </Router>, document.getElementById('root')
)
