import type { AppThunkAction } from '../types';
import { getFeed } from './actions';

export const fetchFeedUserAsync = (): AppThunkAction<Promise<void>> => {
	return async (dispatch, getState, api) => {
		const { data } = await api.users.me.feed.fetch({ cursor: null });
		dispatch(getFeed(data.items));
	};
};
