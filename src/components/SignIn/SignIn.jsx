import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../../firebase';
import './SignIn.css';
import Button from '../Button/Button'

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
            <div className="form">
                <h2 className="form_heading">Sign in</h2>
                <div className="form_group">
                    <input 
                        type="text" 
                        className="form-control form_input"
                        placeholder="Your email.."
                        onChange={event => this.setState({email: event.target.value})}
                    />
                    <input 
                        type="password"
                        className="form-control form_input"
                        placeholder="Your password.."
                        onChange={event => this.setState({password: event.target.value})}
                    />
                    <Button
                        action={() => this.signIn()}
                        title="Sign in"
                        type="button"
                        className="btn-default"
                    />
                </div>
                <div className="form_error">{this.state.error.message}</div>
                <h6 className="form_sub-heading">Not a member yet? <Link className="form_link" to={'/signup'}>Sign up instead</Link></h6>
                <div></div>
            </div>
        )
    }
}

export default SignIn;