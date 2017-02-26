import * as actions from '../actions/constants.js';

export default function userReducer(state = {}, action) {
    switch(action.type) {
        case actions.UPDATED_POLLS:
        case actions.LOAD_USER:
            return Object.assign({}, state, action.user);
        default:
            return state;
    }
};
