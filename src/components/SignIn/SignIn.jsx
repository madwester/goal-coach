import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../../firebase';
import './SignIn.css';

class SignIn extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }

    signIn(){
        const { email, password } = this.state;
        //signInWithEmailAndPassword = method from firebase in the auth domain
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .catch(error => {
            this.setState({error})
        })
    }

    render() {
        return (
            <div className="form-horizontal" style={{margin: '10% auto', width: '300px', textAlign: 'center'}}>
                <h2 className="heading">Sign in</h2>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control"
                        style={{marginBottom: '10px'}}
                        placeholder="Your email.."
                        onChange={event => this.setState({email: event.target.value})}
                    />
                    <input 
                        type="password"
                        className="form-control"
                        style={{marginBottom: '20px'}}
                        placeholder="Your password.."
                        onChange={event => this.setState({password: event.target.value})}
                    />
                    <button 
                        className="btn btn-primary"
                        type="button"
                        style={{width: '100%'}}
                        onClick={() => this.signIn()}
                    >
                    Sign In
                    </button>
                </div>
                <div>{this.state.error.message}</div>
                <h6>Not a member yet?</h6>
                <div><Link to={'/signup'}>Sign up instead</Link></div>
            </div>
        )
    }
}

export default SignIn;