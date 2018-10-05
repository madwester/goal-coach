import  { SIGNED_IN, SET_GOALS, SET_COMPLETED } from '../constants';

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

export function setGoals(goals){
    // New action
    const action = {
        type: SET_GOALS,
        goals
    }
    return action;
}

export function setCompleted(completeGoals){
    // New action
    const action = {
        type: SET_COMPLETED,
        completeGoals
    }
    return action;
}