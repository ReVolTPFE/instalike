import { Instalike } from '@jmetterrothan/instalike';
import { Reducer } from 'redux';

import {
	UserSuggestionsAction,
	USER_SUGGESTIONS,
	USER_SUGGESTIONS_ADD_CONTACT,
	USER_SUGGESTIONS_REMOVE_CONTACT,
} from './actions';

type UserSuggestionsState = {
	users?: Instalike.User[];
	user?: Instalike.User | undefined;
};

const initialState: UserSuggestionsState = {
	users: [],
	user: undefined,
};

const userSuggestionsReducer: Reducer<UserSuggestionsState, UserSuggestionsAction> = (state = initialState, action) => {
	switch (action.type) {
		case USER_SUGGESTIONS:
			return {
				...state,
				users: action.payload,
			};
		case USER_SUGGESTIONS_ADD_CONTACT:
			return {
				...state,
				user: action.payload,
			};
		case USER_SUGGESTIONS_REMOVE_CONTACT:
			return {
				...state,
				user: action.payload,
			};
		default:
			return state;
	}
};

export default userSuggestionsReducer;
