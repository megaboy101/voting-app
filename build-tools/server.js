import express from 'express';
import webpack from 'webpack';
import passport from 'passport';
import twitter from 'passport-twitter';
import session from 'express-session';
import webpackDevMiddleware from 'webpack-dev-middleware';
import path from 'path';
import config from '../webpack.config.dev.js';

// Node server config
const port = process.env.PORT || 3000;

// Webpack server config
const app = express();
const compiler = webpack(config);

// // Passport server config
// passport.use(new twitter.Strategy({
// 	consumerKey: 'TDSE9fQIriyHgtu5U0G2ghg4j',
// 	consumerSecret: 'Na19LYD0vTgrnMkKApTuacq9RQSUBOfAkEbTPGMfU6BMEhWREV',
// 	callbackUrl: 'http://localhost:3000/api/loginSuccess'
// }, (token, tokenSecret, profile, done) => {
// 	return done(null, profile);
// }));
//
// passport.serializeUser((user, done) => {
// 	done(null, user);
// });
//
// passport.deserializeUser((obj, done) => {
// 	done(null, obj);
// });


// Webpack middleware
app.use(webpackDevMiddleware(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

// // Passport middleware
// app.use(session({secret: 'desi', resave: true, saveUninitialized: true}));
// app.use(passport.initialize());
// app.use(passport.session());


// Client routes (handled client-side by react router)
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

// // Back-end routes
// app.get('/api/login', passport.authenticate('twitter')); // No response to send, just processing data
//
// app.get('/api/loginSuccess', passport.authenticate('twitter', {failureRedirect: '/login'}), (req, res) => {
// 	res.redirect('/');
// });

app.listen(port, (err) => {
	if (err)
		throw err;

	console.log('Server running on port: ' + port);
});
