import { Instalike } from '@jmetterrothan/instalike';

import { AppAction } from '../types';

export const POST = 'COMMENT/NEW_COMMENT';
export const GET = 'COMMENT/GET_COMMENTS';
export const DELETE = 'COMMENT/DELETE_COMMENT';

export type NewCommentAction = AppAction<typeof POST>;
export type GetCommentsAction = AppAction<typeof GET, Instalike.Comment[]>;
export type DeleteCommentAction = AppAction<typeof DELETE>;

export type CommentAction = NewCommentAction | GetCommentsAction | DeleteCommentAction;

export const commentAdd = (data: Instalike.Comment): CommentAction => ({
	type: POST,
	payload: data,
});

export const commentsGet = (data: Instalike.Comment[]): CommentAction => ({
	type: GET,
	payload: data,
});

export const commentDelete = (): CommentAction => ({
	type: DELETE,
	payload: null,
});
