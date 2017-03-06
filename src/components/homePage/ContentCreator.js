import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePolls } from '../../actions/pollsActions.js';


class ContentCreator extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {title: "", topic: "Select a category..."};

		this.submitPoll = this.submitPoll.bind(this);
		this.changeTitle = this.changeTitle.bind(this);
		this.changeTopic = this.changeTopic.bind(this);
	}

	submitPoll() {
		if (this.state.title !== "" && this.state.topic !== "Select a category...") {
			this.props.createPoll(this.state.title, this.state.topic, this.props.username);
			this.setState({title: "", topic: "Select a category..."});
		}
	}

	changeTitle(e) {
		this.setState({title: e.target.value});
	}

	changeTopic(e) {
		this.setState({topic: e.target.value});
	}

	render() {
		if (this.props.username === "Guest") {
			return <p className="content-creator-placeholder">Log in to create polls</p>;
		}

		return (
			<div className="content-creator">
			   <textarea value={this.state.title} placeholder="Add a topic..." onChange={this.changeTitle}></textarea>
			   <select value={this.state.topic} name="topics" onChange={this.changeTopic}>
				   <option value="placeholder">Select a category...</option>
				   <option value="art">Art</option>
				   <option value="programming">Programming</option>
				   <option value="politics">Politics</option>
				   <option value="life/philosophy">Life/Philosophy</option>
				   <option value="love/relationships">Love/Relationships</option>
			   </select>
			   <button onClick={this.submitPoll}>Publish</button>
		   </div>
		);
	}
};


function mapStateToProps(state) {
	return {
		username: state.user.username
	};
};

function mapDispatchToProps(dispatch) {
	return {
		createPoll: function(title, topic, owner) {
			dispatch(updatePolls(title, topic, owner));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentCreator);
