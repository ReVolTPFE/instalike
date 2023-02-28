import { Instalike } from '@jmetterrothan/instalike';

import { AppAction } from '../types';

export const POST = 'POST/NEW_POST';
export const DELETE = 'POST/DELETE_POST';

export type NewPostAction = AppAction<typeof POST>;
export type DeletePostAction = AppAction<typeof DELETE>;

export type PostAction = NewPostAction | DeletePostAction;

export const postAdd = (data: Instalike.Post): PostAction => ({
	type: POST,
	payload: data,
});

export const postDelete = (): PostAction => ({
	type: DELETE,
	payload: null,
});
