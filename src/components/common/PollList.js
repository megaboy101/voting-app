import React, { Component } from 'react';
import { connect } from 'react-redux';
import Poll from '../common/Poll.js';
import { updateOption, deletePoll, updateVotes } from '../../actions/pollsActions.js';


class PollList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {polls: props.polls};
    }

    componentWillReceiveProps(nextProps) {
        this.setState({polls: nextProps.polls});
    }

    render() {
        let key = 0;
        let pollsHTML =  this.state.polls.map(poll => {
            key++;
            return (
				<Poll
					key={key}
					id={poll._id}
					title={poll.title}
					date={poll.date}
					topic={poll.topic}
					options={poll.options}
					owner={poll.owner}
					userName={this.props.username}
                    voterList={poll.voterList}
					deletePoll={this.props.handleDeletePoll}
					updateVotes={this.props.handleUpdateVotes}
					updateOption={this.props.handleUpdateOption} />
            );
        }).reverse();

        if (this.props.filter == 'user' && this.props.username == 'Guest') {
            pollsHTML = <p className="poll-list-placeholder">Log in to create and see your saved polls</p>;
        }

        return (
			<div>
				{pollsHTML}
			</div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    if (ownProps.filter == 'user') {
        return {
            polls: state.polls.filter(poll => poll.owner == state.user.username),
            username: state.user.username
        };
    }

    return {
        polls: state.polls,
        username: state.user.username
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleUpdateOption: function(keyCode, id, inputState) {
            if (keyCode == 13 && inputState !== '') {
                dispatch(updateOption(id, inputState));
            }
        },

        handleDeletePoll: function(id) {
            dispatch(deletePoll(id));
        },

        handleUpdateVotes: function(pollId, choice, username) {
            dispatch(updateVotes(pollId, choice, username));
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(PollList);
