import { Strategy } from 'passport-twitter';
import User from './models/userModel.js';


export default (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });

    passport.use(new Strategy({
        consumerKey: 'TDSE9fQIriyHgtu5U0G2ghg4j',
        consumerSecret: 'Na19LYD0vTgrnMkKApTuacq9RQSUBOfAkEbTPGMfU6BMEhWREV',
        callbackURL: 'http://localhost:3000/api/loginSuccess'
    }, (token, tokenSecret, profile, done) => {
        process.nextTick(() => {
            // There may be an error here, not sure on the profile object properties
            User.find({username: profile.username}, (err, users) => {
                if (err)
                    return done(err);

                if (users.length > 0) {
                    return done(null, users[0]);
                }
                else {
                    let newUser = new User();
                    newUser.username = profile.username;
                    newUser.profilePic = profile.photos[0].value;

                    newUser.save((err) => {
                        if (err)
                            throw err;
                        return done(null, newUser);
                    });
                }
            });
        });
    }));
};
