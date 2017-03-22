import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index.js';
import thunk from 'redux-thunk';


export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, applyMiddleware(thunk));
}


/*
{
	user: {
		username: "Guest",
	},

	polls: [
		{
			title: "",
			dateCreated: Date.now(),
			topic: "",
			owner: 'username'
			options: {
				firstOption: 0,
				secondOption: 2
			}
		},
		{
			title: "",
			dateCreated: Date(),
			topic: "",
			owner: 'username'
			options: {
				firstOption: 0,
				secondOption: 2
			}
		}
	]
}
*/
