import React, { Component } from 'react';
import { connect } from 'react-redux';
import Graph from './Graph.js';


const Poll = ({ id, title, date, topic, options, owner, userName, updateOption, deletePoll, updateVotes }) => {
	// Dynamically add poll options
	let optionInput;
	let optionsList = [];
	let key = 0;
	for (let option in options) {
		optionsList.push(
			<option
				key={key}
				value={option.toLowerCase()}>
					{option} - {options[option]}
			</option>
		);
		key++;
	}

	// Dynamically show input to add options
	let addOptionInput = <p className="add-option-guest">Sign in to add custom options</p>;
	if (userName !== 'Guest') {
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
	if (userName == owner) {
		deleteButton = <button onClick={() => deletePoll(id)} className="delete-button">Delete</button>;
	}

	return (
		<section>
			<div className="graph">
				<Graph data={options} />
			</div>
			<div className="section-content">
				<h2>
				   {title}
				</h2>
				<p>{date} | {topic}</p>
				   <select onChange={e => updateVotes(id, e.target.value)}>
						<option key={999} value={'Vote on an option...'}>Vote on an option...</option>
					   {optionsList}
				   </select>
				{addOptionInput}
				{deleteButton}
			</div>
		</section>
	);
};

export default Poll;
