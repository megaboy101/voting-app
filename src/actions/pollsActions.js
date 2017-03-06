import * as actions from './constants.js';
import { downloadPolls, pollsWithUpdatedOption, updateWithNewPoll, updateWithDeletedPoll, updateWithNewVote } from '../api/api.js';

// Standard startup action to load the current state of polls from the database
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
export function updatePolls(title, topic, owner) {
	return dispatch => {
		return updateWithNewPoll(title, topic, owner).then(polls => {
			dispatch({type: actions.LOAD_POLLS, polls});
		}).catch(err => {
			throw(err);
		});
	}
}

// Delete a poll given its id
export function deletePoll(pollId) {
	return dispatch => {
		return updateWithDeletedPoll(pollId).then(polls => {
			dispatch({type: actions.LOAD_POLLS, polls});
		}).catch(err => {
			throw(err);
		});
	}
}

// Update the votes on a specific option within a poll
export function updateVotes(pollId, choice) {
	return dispatch => {
		return updateWithNewVote(pollId, choice).then(polls => {
			dispatch({type: actions.LOAD_POLLS, polls});
		}).catch(err => {
			throw(err);
		})
	}
}
