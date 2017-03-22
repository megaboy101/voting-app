/*
    - Load the polls after publishing a new poll
    - Check that user created polls appear in their account list of polls
    - Make sure the poll components are getting all the data they need
*/



// GET
export function downloadPolls() {
    return new Promise(resolve => {
        // Initialize a dynamic request URL (maps it to the caller, so localhost or Heroku!)
        const req = new Request('/api/polls');

        // Fetch function with request url as sole parameter
        fetch(req)
            // Fetch returns a Response promise, this must first be parsed into JSON
            .then(res => {
                return res.json();
            })
            // Returns a JSON promise, this res can be used like any other JSON object
            .then(polls => {
                resolve(polls);
            });
    });
}

// POST
export function pollsWithUpdatedOption(id, option) {
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
        });

        downloadPolls().then(polls => resolve(polls));
    });
}

// POST
export function updateWithNewPoll(title, topic, owner) {
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
        })
        .then(res => res.json())
        .then(polls => {
            resolve(polls);
        });
    });
}

// DELETE
export function updateWithDeletedPoll(pollId) {
    return new Promise(resolve => {
        let req = new Request('/api/polls/' + pollId);
        fetch(req, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(polls => resolve(polls));
    });
}

// PUT
export function updateWithNewVote(pollId, option) {
    return new Promise(resolve => {
        let req = new Request('/api/polls' + pollId);
        fetch(req, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({option})
        })
        .then(res => res.json())
        .then(polls => resolve(polls));
    });
}

export function downloadUser() {
    return new Promise(resolve => {
        let req = new Request('/api/currentUser');
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
