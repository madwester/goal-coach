// Adding some Redux logic. Handles setting our goals in props. 
// Essentially we will have an action creator that will set the goals globally in our store
// 3 steps, add new constans (SET_GOALS)

import { SET_GOALS } from '../constants';

export default (state = [], action) => {
    switch(action.type){
        case SET_GOALS:
            const { goals } = action;
            return goals;
        default: 
            return state;
    }
}