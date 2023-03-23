import { CommentData } from '@jmetterrothan/instalike';

import type { AppThunkAction } from '../types';
import { commentAdd, commentDelete, commentsGet } from './actions';

export const fetchNewCommentAsync = (post_id: number, commentContent: CommentData): AppThunkAction<Promise<void>> => {
	return async (dispatch, getState, api) => {
		const { data } = await api.posts.find(post_id).comments.create(commentContent);
		dispatch(commentAdd(data));
	};
};

export const fetchGetCommentsAsync = (post_id: number, cursor = null): AppThunkAction<Promise<void>> => {
	return async (dispatch, getState, api) => {
		const { data } = await api.posts.find(post_id).comments.fetch({ cursor: cursor });
		dispatch(commentsGet(data));
	};
};

export const fetchDeleteCommentAsync = (post_id: number, comment_id: number): AppThunkAction<Promise<void>> => {
	return async (dispatch, getState, api) => {
		await api.posts.find(post_id).comments.find(comment_id).delete();
		dispatch(commentDelete());
	};
};
