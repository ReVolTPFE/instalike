import type { AppThunkAction } from '../types';
import { getDiscover } from './actions';

export const fetchDiscoverUserAsync = (): AppThunkAction<Promise<void>> => {
	return async (dispatch, getState, api) => {
		const { data } = await api.posts.fetch({ cursor: null });
		dispatch(getDiscover(data.items));
	};
};
