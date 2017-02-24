import React, { Component } from 'react';
import { connect } from 'react-redux';
import Poll from './Poll.js';
import { updateOption } from '../../actions/pollsActions.js';

const PollList = ({ polls, handleUpdateOption }) => {
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
		polls: state.polls
	};
};

function mapDispatchToProps(dispatch) {
	return {
		handleUpdateOption: function(keyCode, id, inputState) {
			if (keyCode == 13 && inputState !== "") {
				dispatch(updateOption(id, inputState));
			}
		}
	}
};


export default connect(mapStateToProps, mapDispatchToProps)(PollList);
