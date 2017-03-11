import React from 'react';
import { connect } from 'react-redux';
import Poll from '../common/Poll.js';
import { updateOption, deletePoll, updateVotes } from '../../actions/pollsActions.js';

const UserPollList = ({ filteredpolls, username, handleUpdateOption, handleDeletePoll, handleUpdateVotes }) => {
	let key = 0;
	let pollsHTML;

	if (username !== "Guest") {
		pollsHTML = filteredpolls.map(poll => {
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
					userName={username}
					updateVotes={handleUpdateVotes}
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
	return {
		filteredpolls: state.polls.filter(poll => poll.owner == state.user.username),
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

		handleDeletePoll: function(pollId) {
			dispatch(deletePoll(pollId));
		},

		handleUpdateVotes: function(pollId, choice) {
			dispatch(updateVotes(pollId, choice));
		}
	}
};


export default connect(mapStateToProps, mapDispatchToProps)(UserPollList);
