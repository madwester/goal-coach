import { combineReducers } from 'redux';
import user from './reducer_user';
import goals from './reducer_goals';

// Creating an object
export default combineReducers({
    user,
    goals
})