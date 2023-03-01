import { Instalike } from '@jmetterrothan/instalike';

import { AppAction } from '../types';

export const POST = 'POST/NEW_POST';
export const GET = 'POST/GET_POST';
export const DELETE = 'POST/DELETE_POST';

export type NewPostAction = AppAction<typeof POST>;
export type GetPostAction = AppAction<typeof GET, Instalike.Post>;
export type DeletePostAction = AppAction<typeof DELETE>;

export type PostAction = NewPostAction | GetPostAction | DeletePostAction;

export const postAdd = (data: Instalike.Post): PostAction => ({
	type: POST,
	payload: data,
});

export const postGet = (data: Instalike.Post): PostAction => ({
	type: GET,
	payload: data,
});

export const postDelete = (): PostAction => ({
	type: DELETE,
	payload: null,
});
