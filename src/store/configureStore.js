import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index.js';
import thunk from 'redux-thunk';


export default function configureStore(initialState) {
	return createStore(rootReducer, initialState, applyMiddleware(thunk));
};


/*
{
	user: {
		username: "Guest",
		password: "",
		pollsCreated: 0,
		pollsVoted: 0,
		optionsCreated: 0,
		verified: NO,
		mostPopular: ["You haven't created any polls yet"],
		pollsCreated: [
			{
				title: "",
				dateCreated: "",
				topic: "",
				options: ["Pick a response..."],
			}
		]
	},

	polls: [
		{
			title: "",
			dateCreated: "",
			topic: "",
			options: ["Pick a response..."]
		}
	]
}
*/
