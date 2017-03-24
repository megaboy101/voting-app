import * as actions from './constants.js';
import { fetchPolls, updatePollOption, addPoll, removePoll, updatePollVote } from '../api/api.js';

// Standard startup action to load the current state of polls from the database
export function loadPolls() {
    return dispatch => {
        return fetchPolls().then(polls => {
            dispatch({type: actions.LOAD_POLLS, polls});
        }).catch(err => {
            throw(err);
        });
    };
}

export function updateOption(id, option) {
    return dispatch => {
        updatePollOption(id, option)
        .then(() => dispatch(loadPolls()));
    };
}

export function updatePolls(title, topic, owner) {
    return dispatch => {
        addPoll(title, topic, owner)
        .then(() => dispatch(loadPolls()));
    };
}

export function deletePoll(pollId) {
    return dispatch => {
        removePoll(pollId)
        .then(() => dispatch(loadPolls()));
    };
}

export function updateVotes(pollId, choice, username) {
    console.log(pollId, choice, username);
    return dispatch => {
        updatePollVote(pollId, choice, username)
        .then(() => dispatch(loadPolls()));
    };
}
