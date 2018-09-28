import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from './firebase';
import { logUser } from './actions';
import reducer from './reducers';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const store = createStore(reducer);

// CHECKING IF USER IS LOGGED IN OR NOT
// onAuthStateChanged returns a promise that we can handle with a variable
firebaseApp.auth().onAuthStateChanged(user => {
    if(user){
        //console.log('user has signed in or up', user);
        // Finding email variable within user object that Firebase gives us
        const { email } = user;
        store.dispatch(logUser(email));
        browserHistory.push('/app');
    }
    else {
        //console.log('user has signed out or still needs to sgn in');
        browserHistory.replace('/signin');
    }
})

ReactDOM.render(
    <Provider store={store}>
        <Router path="/" history={browserHistory}>
            <Route path="/app" component={App}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
        </Router>
    </Provider>, document.getElementById('root')
)
