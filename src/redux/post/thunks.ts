import { PostData } from '@jmetterrothan/instalike';

import type { AppThunkAction } from '../types';
import { postAdd, postDelete } from './actions';

export const fetchNewPostAsync = (postContent: PostData): AppThunkAction<Promise<void>> => {
	return async (dispatch, getState, api) => {
		const { data } = await api.posts.create(postContent);
		dispatch(postAdd(data));
	};
};

export const fetchDeletePostAsync = (post_id: number): AppThunkAction<Promise<void>> => {
	return async (dispatch, getState, api) => {
		await api.posts.find(post_id).delete();
		dispatch(postDelete());
	};
};
