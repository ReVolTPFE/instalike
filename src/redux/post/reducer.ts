import { Instalike } from '@jmetterrothan/instalike';
import { Reducer } from 'redux';

import { PostAction, POST, DELETE, GET } from './actions';

type PostState = {
	posts?: Instalike.Post[];
	post?: Instalike.Post | undefined;
};

const initialState: PostState = {
	posts: [],
	post: undefined,
};

const postReducer: Reducer<PostState, PostAction> = (state = initialState, action) => {
	switch (action.type) {
		case POST:
			return {
				...state,
				posts: action.payload as Instalike.Post[],
			};
		case GET:
			return {
				...state,
				post: action.payload,
			};
		case DELETE:
			return {
				...state,
				posts: action.payload as Instalike.Post[],
			};
		default:
			return state;
	}
};

export default postReducer;
