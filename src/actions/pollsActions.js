import * as actions from './constants.js';
import { downloadPolls, pollsWithUpdatedOption, updateWithNewPoll, updateWithDeletedPoll } from '../api/mockApi.js';

// Create an async action to load polls
export function loadPolls() {
	return dispatch => {
		return downloadPolls().then(polls => {
			dispatch({type: actions.LOAD_POLLS, polls});
		}).catch(err => {
			throw(err);
		});
	};
};

// Update the options for a poll, given the polls id, and the option to add
export function updateOption(id, option) {
	return dispatch => {
		return pollsWithUpdatedOption(id, option).then(polls => {
			dispatch({type: actions.LOAD_POLLS, polls});
		}).catch(err => {
			throw(err);
		});
	}
}

// Update the polls list with a new poll, given the polls chosen title and topic
export function updatePolls(title, topic, userId) {
	return dispatch => {
		return updateWithNewPoll(title, topic, userId).then((polls, user) => {
			dispatch({type: actions.UPDATED_POLLS, polls, user});
		}).catch(err => {
			throw(err);
		});
	}
}

export function deletePoll(id, userId) {
	return dispatch => {
		console.log(userId);
		return updateWithDeletedPoll(id, userId).then((polls, user) => {
			dispatch({type: actions.UPDATED_POLLS, polls, user});
		}).catch(err => {
			throw(err);
		});
	}
}
