import React, { Component } from 'react';
import { connect } from 'react-redux';
import Poll from '../common/Poll.js';
import { updateOption, deletePoll } from '../../actions/pollsActions.js';

const PollList = ({ polls, loggedIn, userPolls, handleUpdateOption, handleDeletePoll }) => {
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
				deletePoll={handleDeletePoll}
				loggedIn={loggedIn}
				usersPolls={userPolls}
				updateOption={handleUpdateOption} />
		);
	});

	return (
		<div>
			{pollsHTML.reverse()}
		</div>
	);
};

function mapStateToProps(state) {
	return {
		polls: state.polls,
		loggedIn: state.user.id,
		userPolls: state.user.pollsCreatedById
	};
};

function mapDispatchToProps(dispatch) {
	return {
		handleUpdateOption: function(keyCode, id, inputState) {
			if (keyCode == 13 && inputState !== "") {
				dispatch(updateOption(id, inputState));
			}
		},

		handleDeletePoll: function(id, userId) {
			dispatch(deletePoll(id, userId));
		}
	}
};


export default connect(mapStateToProps, mapDispatchToProps)(PollList);
