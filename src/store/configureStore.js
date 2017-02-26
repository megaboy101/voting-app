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
		mostPopularById: ["You haven't created any polls yet"],
		pollsCreatedById: [
			Symbol(),
			Symbol()
		]
	},

	polls: [
		{
			title: "",
			dateCreated: Date(),
			topic: "",
			options: ["Pick a response..."]
		},
		{
			title: "",
			dateCreated: Date(),
			topic: "",
			options: ["Pick a response..."]
		}
	]
}
*/
