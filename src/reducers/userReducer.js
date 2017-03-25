import * as actions from '../actions/constants.js';

export default function(state = {username: 'Guest', profilePic: 'http://www.veram.eu/images/thumb/default_picture.png'}, action) {
    switch(action.type) {
    case actions.LOAD_USER:
        if (action.user.username) {
            return {
                username: action.user.username,
                profilePic: action.user.profilePic
            };
        }
        return {
            username: 'Guest'
        };
    default:
        return state;
    }
}
