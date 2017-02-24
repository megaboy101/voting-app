import React, { Component } from 'react';
import { connect } from 'react-redux';


const Poll = ({ id, title, date, topic, options, updateOption }) => {
	let optionInput;
	let optionsList = [];
	for (let i = 0; i < options.length; i++) {
		optionsList.push(<option key={i} value={options[i].toLowerCase()}>{options[i]}</option>)
	};

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
				<input
					ref={node => (optionInput = node)}
					onKeyDown={node => {
						updateOption(node.keyCode, id, optionInput.value);
						node.keyCode == 13 ? optionInput.value = "" : null;
					}}
					type="text"
					placeholder="Sign in to add an option..." />
			</div>
		</section>
	);
};

export default Poll;
