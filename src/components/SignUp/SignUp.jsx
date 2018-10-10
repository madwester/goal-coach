import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../../firebase';

class SignUp extends Component {
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

    signUp(){
        const { email, password } = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
        .catch(error => {
            this.setState({error})
        })
    }

    render() {
        return (
            <div className="form-horizontal" style={{margin: '10% auto', width: '300px', textAlign: 'center'}}>
                <h2 style={{marginBottom: '30px'}}>Sign up</h2>
                <div className="form-group">
                    <input 
                        className="form-control"
                        type="text"
                        style={{marginBottom: '10px'}}
                        placeholder="Your email.."
                        onChange = {event => this.setState({email: event.target.value})}
                    />
                    <input
                        className="form-control"
                        type="password"
                        style={{marginBottom: '20px'}}
                        placeholder="Your password.."
                        onChange = {event => this.setState({password: event.target.value})}
                    />
                    <button
                        className="btn btn-primary"
                        type="button"
                        style={{width: '100%'}}
                        onClick={() => this.signUp()}
                    >
                    Sign Up
                    </button>
                </div>
                <div>{this.state.error.message}</div>
                <div>
                    <h6>Already a member?</h6>
                    <Link to={'/signin'}>Sign in instead</Link>
                </div>
            </div>
        )
    }
}

export default SignUp;