import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes.js';
import './stylesheets/main.scss';
console.log('here');

render(
	<Router history={browserHistory} routes={routes} />,
	document.getElementById('app')
);
