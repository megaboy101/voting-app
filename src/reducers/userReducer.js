import * as actions from '../actions/constants.js';

export default function(state = {username: 'Guest'}, action) {
    switch(action.type) {
    case actions.LOAD_USER:
        if (action.user.username) {
            return {
                username: action.user.username
            };
        }
        return {
            username: 'Guest'
        };
    default:
        return state;
    }
}
