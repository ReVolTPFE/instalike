import type { AppThunkAction } from '../types';
import { getUserSuggestions, postUserSuggestionsAddContact, postUserSuggestionsRemoveContact } from './actions';

export const fetchGetUserSuggestionsAsync = (): AppThunkAction<Promise<void>> => {
	return async (dispatch, getState, api) => {
		const { data } = await api.users.me.followSuggestions.fetch({});
		dispatch(getUserSuggestions(data));
	};
};

export const fetchPostUserSuggestionsAddContactAsync = (user_id: number): AppThunkAction<Promise<void>> => {
	return async (dispatch, getState, api) => {
		const { data } = await api.users.me.followers.follow(user_id);
		dispatch(postUserSuggestionsAddContact(data));
	};
};

export const fetchPostUserSuggestionsRemoveContactAsync = (user_id: number): AppThunkAction<Promise<void>> => {
	return async (dispatch, getState, api) => {
		const { data } = await api.users.me.followers.unfollow(user_id);
		dispatch(postUserSuggestionsRemoveContact(data));
	};
};
