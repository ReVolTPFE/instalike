import type { AppThunkAction } from '../types';
import { getUserSuggestions } from './actions';

export const fetchUserSuggestionsAsync = (): AppThunkAction<Promise<void>> => {
	return async (dispatch, getState, api) => {
		const { data } = await api.users.me.followSuggestions.fetch({});
		dispatch(getUserSuggestions(data));
	};
};
