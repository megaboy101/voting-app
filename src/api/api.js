// GET
export function fetchPolls() {
    return new Promise(resolve => {
        const req = new Request('/api/polls');
        fetch(req)
            .then(res => res.json())
            .then(polls => resolve(polls));
    });
}

// POST
export function updatePollOption(id, option) {
    return new Promise(resolve => {
        const req = new Request(`/api/polls/${id}`);

        fetch(req, {
			// REQUIRED
            method: 'POST',
            // VERY VERY REQUIRED
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
			// DONT FORGET TO STRINGIFY
            body: JSON.stringify({option})
        }).then(() => resolve());


    });
}

// POST
export function addPoll(title, topic, owner) {
    return new Promise(resolve => {
        let d = new Date();
        const months = [
            'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY',
            'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
        ];

        let newPoll = {
            title,
            owner,
            date: `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`,
            topic,
            voterList: [],
            options: []
        };

        let req = new Request('/api/polls');
        fetch(req, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPoll)
        }).then(() => resolve());
    });
}

// DELETE
export function removePoll(pollId) {
    return new Promise(resolve => {
        let req = new Request('/api/polls/' + pollId);
        fetch(req, {
            method: 'DELETE'
        }).then(() => resolve());
    });
}

// PUT
export function updatePollVote(pollId, option, username) {
    return new Promise(resolve => {
        let req = new Request('/api/polls/' + pollId);
        fetch(req, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({option, username})
        }).then(() => resolve());
    });
}

export function downloadUser() {
    return new Promise(resolve => {
        let req = new Request('/api/currentuser');
        // When working with session data (cookies), fetch requires you add 'credentials'
        fetch(req, {
            credentials: 'include'
        })
        .then(res => {
            return res.json();
        })
        .then(user => {
            resolve(user);
        });
    });
}
