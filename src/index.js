import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes.js';
import './stylesheets/main.scss';
import configureStore from './store/configureStore.js';
import { Provider } from 'react-redux';
import { loadPolls } from './actions/pollsActions.js';
import { loadUser } from './actions/userActions.js';
import { mockUsers } from './api/mockApi.js';

const store = configureStore();
store.dispatch(loadPolls());
const locallyStoredUserId = mockUsers[0].id; // Delete this after the actual api is built
store.dispatch(loadUser(locallyStoredUserId));

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.getElementById('app')
);
