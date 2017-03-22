import { combineReducers } from 'redux';
import polls from './pollsReducer.js';
import user from './userReducer.js';

export default combineReducers({
    polls,
    user
});
