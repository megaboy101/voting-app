import React from 'react';
import Graph from './Graph.js';

const Poll = ({ id, title, date, topic, options, owner, userName, voterList, updateOption, deletePoll, updateVotes}) => {
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
    let addOptionInput = <p className="add-option-guest">Log in to add custom options</p>;
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
    if (userName === owner) {
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
                    <select onChange={e => verifyAndVote(id, e.target.value, userName, voterList, updateVotes)}>
						<option key={999} value={'Vote on an option...'}>Vote on an option...</option>
                            {optionsList}
                    </select>
				{addOptionInput}
                <div className="poll-options">
                    {deleteButton}
                    <a className="twitter-share-button"
                        href="https://twitter.com/intent/tweet?text=I%20voted%20on%20a%20poll!"
                        target="_blank">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <script async src="//platform.twitter.com/widgets.js"></script>
                </div>
			</div>
		</section>
    );
};

function verifyAndVote(id, choice, userName, voterList, func) {
    if (userName === 'Guest' && localStorage.getItem(id) !== 'YES') {
        localStorage.setItem(id, 'YES');
        func(id, choice, userName);
    }
    else if (voterList.indexOf(userName) === -1)
        func(id, choice, userName);
    else
        alert('You can only vote for a poll once.');
}

export default Poll;
