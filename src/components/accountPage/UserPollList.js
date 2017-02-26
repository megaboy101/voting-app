import React from 'react';
import { connect } from 'react-redux';
import Poll from '../common/Poll.js';
import { updateOption } from '../../actions/pollsActions.js';

const UserPollList = ({ polls, loggedIn, handleUpdateOption }) => {
	let key = 0;
	let pollsHTML;

	if (loggedIn) {
		pollsHTML = polls.map(poll => {
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
		}).reverse();
	} else {
		pollsHTML = <p className="poll-list-placeholder">Log in to create and see your saved polls</p>
	}

	return (
		<div>
			{pollsHTML}
		</div>
	);
};

function mapStateToProps(state) {
	let filteredPolls = [];
	if (state.user.pollsCreatedById) {
		filteredPolls = state.polls.filter(poll => {
			return state.user.pollsCreatedById.indexOf(poll.id) !== -1;
		});
	}
	return {
		polls: filteredPolls,
		loggedIn: state.user.id
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


export default connect(mapStateToProps, mapDispatchToProps)(UserPollList);
