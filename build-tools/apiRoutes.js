import { Router } from 'express';
import Poll from './models/pollModel.js';
import User from './models/userModel.js';

const router = Router();


// Api Routes
router.use((req, res, next) => {
	console.log('Api request made.');
	next();
});

/*
	Get all the polls from the database
	Update a specific polls options'
	Add a new poll to the database
	Delete a poll from the database
	Update a specific polls votes

	Get a users information from the database


	/polls
		GET All polls from the database <=
		POST A new poll to the database <=

	/polls/:pollId
		POST a new option on a poll <=
		PUT a new vote on a poll <=
		DELETE a poll from the database <=

	/:userId
		GET a specific user from the database

*/

router.route('/polls')
	// Get the list of all polls <=
	.get((req, res) => {
		Poll.find((err, polls) => {
			if (err)
				res.send(err);

			res.json(polls);
		});
	})
	// Add a poll to the database and send the new poll list <=
	.post((req, res) => {
		let poll = new Poll();

		poll.title = req.body.title;
		poll.dateCreated = req.body.dateCreated;
		poll.topic = req.body.topic;
		poll.options = req.body.options;

		poll.save(err => {
			if (err)
				res.send(err);
		});

		Poll.find((err, polls) => {
			if (err)
				res.send(err);

			res.json(polls);
		});
	});

router.route('/polls/:pollId')
	// Post a new option to a polls list of options
	.post((req, res) => {
		Poll.findById(req.params.pollId, (err, poll) => {
			if (err)
				res.send(err);

			let option = {};
			option[req.body.option] = 0;
			JSON.parse(poll.options);
			poll.options.push(option);

			poll.save(err => {
				if (err)
					res.send(err);
			});
		});

		Poll.find((err, polls) => {
			if (err)
				res.send(err);

			res.json(polls);
		});
	})
	// Increment the vote on a polls option
	.put((req, res) => {
		Poll.findById(req.params.pollId, (err, poll) => {
			if (err)
				res.send(err);

			poll.options[req.body.option] += 1;

			poll.save(err => {
				if (err)
					res.send(err);
			});
		});

		Poll.find((err, polls) => {
			if (err)
				res.send(err);

			res.json(polls);
		});
	})
	// Delete a poll from the database <=
	.delete((req, res) => {
		Poll.remove({_id: req.params.pollId}, err => {
			if (err)
				res.send(err);
		});

		Poll.find((err, polls) => {
			if (err)
				res.send(err);

			res.json(polls);
		});
	});


export default router;
