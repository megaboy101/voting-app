import React from 'react';
import { connect } from 'react-redux';


const UserWidget = ({user}) => {
	let userStats;
	if (user.id) {
		userStats =
		<p className="user-stats">
			 Polls created: {user.pollsCreated} <br/>
			 Polls voted for: {user.pollsVoted} <br/>
			 Options created: {user.optionsCreated} <br/>
			 Verified: {user.verified} <br/>
	 	</p>;
	} else {
		userStats =
		<p className="user-stats">
			 Sign in to see your polling stats
	 	</p>;
	}

	return (
		<aside>
			<img src="http://placehold.it/70x70" />
			{userStats}
			<div className="line"></div>
			<h3>Your Top Polls:</h3>
			<ul className="top-polls">
				<li>Nothing here</li>
			</ul>
			<div className="line"></div>
			<ul className="media-icons">
				<li><i className="fa fa-facebook" aria-hidden="true"></i></li>
				<li><i className="fa fa-instagram" aria-hidden="true"></i></li>
				<li><i className="fa fa-twitter" aria-hidden="true"></i></li>
				<li><i className="fa fa-reddit-alien" aria-hidden="true"></i></li>
			</ul>
		</aside>
	);
};


function mapStateToProps(state) {
	return {
		user: state.user
	};
};

export default connect(mapStateToProps)(UserWidget);
