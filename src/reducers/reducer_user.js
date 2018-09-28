import { SIGNED_IN } from '../constants';

let user = {
    email: null
}

export default (state = user, action) => {

    // Pattern with reducers - we switch on the action.type
    switch (action.type) {
        // Handle the first case of sign in
        case SIGNED_IN:
        // Grabbing email from action
        const { email } = action;
        // Now saying that user is now the email we found
        user = {
            email
        }
        return user;
    // Always need a default state with a switch
    default:
        return state;
    }
}