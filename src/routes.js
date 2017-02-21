import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.js';
import HomePage from './components/homePage/HomePage.js';
import AccountPage from './components/accountPage/AccountPage.js';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="/:account" component={AccountPage} />
	</Route>
);
