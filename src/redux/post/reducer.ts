import { Instalike } from '@jmetterrothan/instalike';
import { Reducer } from 'redux';

import { PostAction, POST, DELETE } from './actions';

type PostState = {
	posts: Instalike.Post[];
};

const initialState: PostState = {
	posts: [],
};

const postReducer: Reducer<PostState, PostAction> = (state = initialState, action) => {
	switch (action.type) {
		case POST:
			return {
				...state,
				posts: action.payload as Instalike.Post[],
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
