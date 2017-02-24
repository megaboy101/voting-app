import * as actions from '../actions/constants.js';

export default function pollsReducer(state = [], action) {
	switch(action.type) {
		case actions.LOAD_POLLS:
			return [...action.polls];
		default:
			return state;
	}
};
