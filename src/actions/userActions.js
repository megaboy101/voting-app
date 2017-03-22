import * as actions from './constants.js';
import { downloadUser } from '../api/api.js';

export function loadUser() {
    return dispatch => {
        return downloadUser().then(user => {
            dispatch({
                type: actions.LOAD_USER,
                user
            });
        }).catch(err => {
            throw(err);
        });
    };
}
