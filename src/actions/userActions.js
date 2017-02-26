import * as actions from './constants.js';
import { downloadUser } from '../api/mockApi.js';

function loadGuest() {
    return {
        type: actions.LOAD_USER,
        user: {
    		username: "Guest",
    		verified: "NO"
        }
    };
};

export function loadUser(savedId) {
    return dispatch => {
        if (savedId) {
            return downloadUser(savedId).then(user => {
                dispatch({
                    type: actions.LOAD_USER,
                    user
                });
            }).catch(err => {
                throw(err);
            });
        }
        return dispatch(loadGuest());
    }
};
