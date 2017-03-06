import React, { Component } from 'react';
import { connect } from 'react-redux';
import Poll from '../common/Poll.js';
import { updateOption, deletePoll, updateVotes } from '../../actions/pollsActions.js';

const PollList = ({ polls, username, handleUpdateOption, handleDeletePoll, handleUpdateVotes }) => {
	let key = 0;
	const pollsHTML = polls.map(poll => {
		key++;
		return (
			<Poll
				key={key}
				id={poll.id}
				title={poll.title}
				date={poll.date}
				topic={poll.topic}
				options={poll.options}
				owner={poll.owner}
				deletePoll={handleDeletePoll}
				updateVotes={handleUpdateVotes}
				updateOption={handleUpdateOption} />
		);
	}).reverse();

	return (
		<div>
			{pollsHTML}
		</div>
	);
};

function mapStateToProps(state) {
	return {
		polls: state.polls,
		username: state.user.username
	};
};

function mapDispatchToProps(dispatch) {
	return {
		handleUpdateOption: function(keyCode, id, inputState) {
			if (keyCode == 13 && inputState !== "") {
				dispatch(updateOption(id, inputState));
			}
		},

		handleDeletePoll: function(id) {
			dispatch(deletePoll(id));
		},

		handleUpdateVotes: function(pollId, choice) {
			dispatch(updateVotes(pollId, choice));
		}
	}
};


export default connect(mapStateToProps, mapDispatchToProps)(PollList);
