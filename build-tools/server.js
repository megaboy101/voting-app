import express from 'express';
import webpack from 'webpack';
import passport from 'passport';
import twitter from 'passport-twitter';
import session from 'express-session';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import webpackDevMiddleware from 'webpack-dev-middleware';
import path from 'path';
import config from '../webpack.config.dev.js';
import router from './apiRoutes.js';

// Node server config
const port = process.env.PORT || 3000;

// Express server config
const app = express();

// Webpack sercer config
const compiler = webpack(config);

// Connect to database
// mongoose.connect('mongodb://megaboy101:megaboy101@ds163699.mlab.com:63699/voting-app');

// Webpack middleware
app.use(webpackDevMiddleware(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

// Body-parser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Api routing custom middleware
app.use('/api', router);


// Client routes (handled client-side by react router) MUST COME LAST
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});


// Startup server
app.listen(port, (err) => {
	if (err)
		throw err;

	console.log('Server running on port: ' + port);
});
