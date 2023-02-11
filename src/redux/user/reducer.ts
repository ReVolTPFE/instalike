import { Instalike } from '@jmetterrothan/instalike';
import { Reducer } from 'redux';

import { UserSuggestionsAction, USER_SUGGESTIONS } from './actions';

type UserSuggestionsState = {
	users: Instalike.User[];
};

const initalState: UserSuggestionsState = {
	users: [],
};

const userSuggestionsReducer: Reducer<UserSuggestionsState, UserSuggestionsAction> = (state = initalState, action) => {
	switch (action.type) {
		case USER_SUGGESTIONS:
			return {
				...state,
				users: action.payload,
			};
		default:
			return state;
	}
};

export default userSuggestionsReducer;
