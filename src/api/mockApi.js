const mockPolls = [
	{
		id: Symbol(),
		title: "Here is the second poll, now with options",
		date: "OCTOBER 23, 2015",
		topic: "politics",
		options: ["Pick a response...", "option #1", "option #2"]
	},
	{
		id: Symbol(),
		title: "Here is the first poll",
		date: "DECEMBER 10, 2017",
		topic: "art",
		options: ["Pick a response..."]
	}
];

export const mockUsers = [
	{
		id: Symbol(),
		username: "Megaboy",
		password: "megaboy",
		pollsCreated: 0,
		pollsVoted: 0,
		optionsCreated: 0,
		verified: "YES",
		mostPopularById: [],
		pollsCreatedById: []
	},
	{
		id: Symbol(),
		username: "Jacob",
		password: "thejacob",
		pollsCreated: 3,
		pollsVoted: 6,
		optionsCreated: 1,
		verified: "YES",
		mostPopularById: [],
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
			mockPolls[editingPollIndex].options.push(option);
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
				options: ["Pick a response..."]
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
