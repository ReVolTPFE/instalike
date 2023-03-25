import { Instalike } from '@jmetterrothan/instalike';

// eslint-disable-next-line import/no-unresolved
import { CommentFeed } from '@jmetterrothan/instalike/dist/types/Instalike';

import { AppAction } from '../types';

export const POST = 'COMMENT/NEW_COMMENT';
export const GET = 'COMMENT/GET_COMMENTS';
export const DELETE = 'COMMENT/DELETE_COMMENT';

export type NewCommentAction = AppAction<typeof POST>;
export type GetCommentsAction = AppAction<typeof GET, CommentFeed>;
export type DeleteCommentAction = AppAction<typeof DELETE>;

export type CommentAction = NewCommentAction | GetCommentsAction | DeleteCommentAction;

export const commentAdd = (data: Instalike.Comment): CommentAction => ({
	type: POST,
	payload: data,
});

export const commentsGet = (data: CommentFeed): CommentAction => ({
	type: GET,
	payload: data,
});

export const commentDelete = (): CommentAction => ({
	type: DELETE,
	payload: null,
});
