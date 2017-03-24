import React from 'react';
import Graph from './Graph.js';

const Poll = ({ id, title, date, topic, options, owner, userName, voterList, updateOption, deletePoll, updateVotes }) => {
    // Dynamically add poll options
    let optionInput;
    let optionsList = [];
    let key = 0;
    for (let option of options) {
        optionsList.push(
			<option
				key={key}
				value={option[0]}>
					{option[0]} - {option[1]}
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
			onKeyDown={
                node => {
                    updateOption(node.keyCode, id, optionInput.value);
                    node.keyCode == 13 ? optionInput.value = '' : null;
                }}
			type="text"
            placeholder="Add an option..." />;
    }

	// Dynamically show delete button
    let deleteButton = '';
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
                    <select onChange={e => verifyAndVote(id, e.target.value, owner, userName, voterList, updateVotes)}>
						<option key={999} value={'Vote on an option...'}>Vote on an option...</option>
                            {optionsList}
                    </select>
				{addOptionInput}
				{deleteButton}
			</div>
		</section>
    );
};

function verifyAndVote(id, choice, owner, userName, voterList, func) {
    if (voterList.indexOf(owner) === -1)
        func(id, choice, userName);
    else
        console.log('You already voted for this poll.');
}

export default Poll;
