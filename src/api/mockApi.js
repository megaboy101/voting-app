const mockPolls = [
	{
		id: Symbol(),
		title: "Here is the first poll",
		date: "DECEMBER 10, 2017",
		topic: "art",
		options: ["Pick a response..."]
	},
	{
		id: Symbol(),
		title: "Here is the second poll, now with options",
		date: "OCTOBER 23, 2015",
		topic: "politics",
		options: ["Pick a response...", "option #1", "option #2"]
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
export function pollsWithUpdatedPoll(title, topic) {
    return new Promise((resolve, reject) => {

			let d = new Date();
			const months = [
				'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY',
				'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
			];
			
			setTimeout(() => {
				mockPolls.push({
					id: Symbol(),
					title,
					date: `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`,
					topic,
					options: ["Pick a response..."]
				});

				resolve(mockPolls);
			}, delay);
		});
};
