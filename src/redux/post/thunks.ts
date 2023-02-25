import type { AppThunkAction } from '../types';
import { postLike, postUnlike } from './actions';

export const fetchPostLikeAsync = (post_id: number): AppThunkAction<Promise<void>> => {
	return async (dispatch, getState, api) => {
		const data = await api.posts.find(post_id).like();
		dispatch(postLike());
	};
};

export const fetchPostUnlikeAsync = (post_id: number): AppThunkAction<Promise<void>> => {
	return async (dispatch, getState, api) => {
		const data = await api.posts.find(post_id).unlike();
		dispatch(postUnlike());
	};
};
