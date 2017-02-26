import React, { Component } from 'react';
import { connect } from 'react-redux';


const Poll = ({ id, title, date, topic, options, updateOption, deletePoll, loggedIn, usersPolls }) => {
	// Dynamically add poll options
	let optionInput;
	let optionsList = [];
	for (let i = 0; i < options.length; i++) {
		optionsList.push(<option key={i} value={options[i].toLowerCase()}>{options[i]}</option>)
	};

	// Dynamically show input to add options
	let addOptionInput = <p className="add-option-guest">Sign in to add custom options</p>;
	if (loggedIn) {
		addOptionInput =
		<input
			ref={node => (optionInput = node)}
			onKeyDown={node => {
				updateOption(node.keyCode, id, optionInput.value);
				node.keyCode == 13 ? optionInput.value = "" : null;
			}}
			type="text"
			placeholder="Add an option..." />
	}

	// Dynamically show delete button
	let deleteButton = "";
	if (usersPolls && usersPolls.indexOf(id) !== -1) {
		deleteButton = <button onClick={() => deletePoll(id, loggedIn)} className="delete-button">Delete</button>;
	}

	return (
		<section>
			<img src="http://placehold.it/180x180" />
			<div className="section-content">
				<h2>
				   {title}
				</h2>
				<p>{date} | {topic}</p>
				   <select>
					   {optionsList}
				   </select>
				{addOptionInput}
				{deleteButton}
			</div>
		</section>
	);
};

export default Poll;
