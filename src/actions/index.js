import  { SIGNED_IN } from '../constants';

// This is an action creater
export function logUser(email){
    // Creating an action 
    const action = {
        // Each ction in Redux needs a type property
        type: SIGNED_IN,
        // Returning an email key with the email that we passed in logUser
        email
    }
    return action;
}