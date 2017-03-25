/*eslint-disable no-console*/
import express from 'express';
import path from 'path';
import compression from 'compression';
import passport from 'passport';
import session from 'express-session';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './apiRoutes.js';
import authConfig from './passportConfig.js';

const port = process.env.PORT || 3000;
const app = express();

// Connect to database
mongoose.connect(`mongodb://${process.env.MLAB_USERNAME}:${process.env.MLAB_PASSWORD}@ds163699.mlab.com:63699/voting-app`);

authConfig(passport);

app.use(compression());
app.use(express.static('dist'));

// Body-parser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Passport/session middleware
app.use(session({
    secret: 'kendrick',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: false,
        secure: false
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', router);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, err => {
    if (err)
        console.log(err);
    console.log('Production server online on port ' + port);
});
