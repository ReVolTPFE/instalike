import type { AppThunkAction } from '../types';
import { getFeed } from './actions';

export const fetchFeedUserAsync = (cursor = null): AppThunkAction<Promise<void>> => {
	return async (dispatch, getState, api) => {
		const { data } = await api.users.me.feed.fetch({ cursor: cursor });
		dispatch(getFeed(data));
	};
};
