const mockPolls = [
	{
		id: Symbol(),
		title: "Here is the second poll, now with options",
		date: "OCTOBER 23, 2015",
		topic: "politics",
		options: [{name: "option #1", votes: 1}, {name: "option #2", votes: 1}]
	},
	{
		id: Symbol(),
		title: "Here is the first poll",
		date: "DECEMBER 10, 2017",
		topic: "art",
		options: []
	}
];

export const mockUsers = [
	{
		id: Symbol(),
		pollsCreated: 0,
		pollsVoted: 0,
		optionsCreated: 0,
		verified: "YES",
		pollsVotedById: [],
		pollsCreatedById: []
	},
	{
		id: Symbol(),
		pollsCreated: 3,
		pollsVoted: 6,
		optionsCreated: 1,
		verified: "YES",
		pollsVotedById: [],
		pollsCreatedById: []
	}
];

const delay = 1000;

// Create a new Promise that resolves with the in-memory polls after a timeout
export function downloadPolls() {
    return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(mockPolls);
			}, delay);
		});
};

// Create a new Promise resolving to the in-memory polls, with the specified option added to the specified poll by id
export function pollsWithUpdatedOption(id, option) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let editingPollIndex = mockPolls.indexOf(mockPolls.filter(poll => poll.id == id)[0]); // Filter out wrong ids from the array of polls, then return the first (only) element from the resulting array
			mockPolls[editingPollIndex].options.push({name: option, votes: 0});
			resolve(mockPolls);
		}, delay);
	})
};

// Create a new Promise using the in-memory polls, with the polls credentials added to have a new poll
export function updateWithNewPoll(title, topic, userId) {
    return new Promise((resolve, reject) => {
		let d = new Date();
		const months = [
			'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY',
			'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
		];

		setTimeout(() => {
			const id = Symbol();
			mockPolls.push({
				id,
				title,
				date: `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`,
				topic,
				options: []
			});

			let user = mockUsers.filter(user => user.id == userId)[0];
			mockUsers[mockUsers.indexOf(user)].pollsCreatedById.push(id);

			resolve(mockPolls, mockUsers.filter(user => user.id == id)[0]);
		}, delay);
	});
};

export function downloadUser(id) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const user = mockUsers.filter(user => user.id == id)[0];
			resolve(user);
		}, delay);
	});
}

export function updateWithDeletedPoll(pollId, userId) {
	return new Promise((resolve, reject) => {
		// Instance of poll to delete
		let pollToDelete = mockPolls.filter(poll => poll.id == pollId)[0];
		// Instance of user
		let user = mockUsers.filter(user => user.id == userId)[0];

		setTimeout(() => {
			// Delete the poll from the list
			mockPolls.splice(mockPolls.indexOf(pollToDelete), 1);

			// Find the user in the list of users, and delete the polls id from the users list of created id's
			mockUsers[mockUsers.indexOf(user)].pollsCreatedById.splice(user.pollsCreatedById.indexOf(pollId), 1);

			resolve(mockPolls, mockUsers.filter(user => user.id == userId)[0]);
		}, delay);
	});
}

export function updateWithNewVote(pollId, choice, userId) {
	return new Promise((resolve, reject) => {
		let user = mockUsers.filter(user => user.id == userId)[0];

		if (user.pollsVotedById.indexOf(pollId) == -1) {
			// Update the poll with the vote
			let poll = mockPolls.filter(poll => poll.id == pollId)[0];
			let pollIndex = mockPolls.indexOf(poll);

			let pollOption = poll.options.filter(option => option.name == choice)[0];
			let pollOptionIndex = poll.options.indexOf(pollOption);
			pollOption.votes += 1;
			poll.options.splice(pollOptionIndex, 1, pollOption)

			mockPolls.splice(pollIndex, 1, poll);

			// Update the user so they cant vote twice
			let userIndex = mockUsers.indexOf(user);
			user.pollsVotedById.push(pollId);
			mockUsers.splice(userIndex, 1, user);

			resolve(mockPolls, user);
		} else {
			alert('You can only vote on a poll once');
		}
	});
}
