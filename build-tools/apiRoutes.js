import { Router } from 'express';
import passport from 'passport';
import Poll from './models/pollModel.js';

const router = Router();


// Api Routes


// Authentication routes
router.get('/auth/twitter',
	passport.authenticate('twitter'));

router.get('/loginSuccess', passport.authenticate('twitter'), (req, res) => {
    res.redirect('/');
});

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
        poll.date = req.body.date;
        poll.topic = req.body.topic;
        poll.options = req.body.options;
        poll.owner = req.body.owner;
        poll.voterList = req.body.voterList;

        poll.save(err => {
            if (err)
                res.send(err);
            res.end();
        });
    });

router.route('/polls/:pollId')
	// Post a new option to a polls list of options
    .post((req, res) => {
        Poll.findById(req.params.pollId, (err, poll) => {
            if (err)
                res.send(err);

            let option = [req.body.option, 0];

            poll.options.push(option);
            poll.markModified('options');

            poll.save(err => {
                if (err)
                    res.send(err);
                res.end();
            });
        });
    })
	// Increment the vote on a polls option
    .put((req, res) => {
        Poll.findById(req.params.pollId, (err, poll) => {
            if (err)
                res.send(err);

            let newPoll = poll;
            for (let i = 0; i < newPoll.options.length; i++) {
                if (newPoll.options[i][0] === req.body.option) {
                    newPoll.options[i][1]++;
                }
            }

            newPoll.voterList.push(req.body.username);

            poll = newPoll;
            poll.markModified('options');
            poll.markModified('voterList');
            poll.save(err => {
                if (err)
                    res.send(err);
                res.end();
            });
        });
    })
	// Delete a poll from the database <=
    .delete((req, res) => {
        Poll.remove({_id: req.params.pollId}, err => {
            if (err)
                res.send(err);
            res.end();
        });
    });

router.get('/currentUser', (req, res) => {
    res.send(req.user);
});


export default router;
