import { Instalike } from '@jmetterrothan/instalike';
import { Reducer } from 'redux';

// eslint-disable-next-line import/no-unresolved
import { CommentFeed } from '@jmetterrothan/instalike/dist/types/Instalike';

import { CommentAction, POST, DELETE, GET } from './actions';

type CommentState = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	comments?: CommentFeed | any;
};

const initialState: CommentState = {
	comments: [],
};

const commentReducer: Reducer<CommentState, CommentAction> = (state = initialState, action) => {
	switch (action.type) {
		case POST:
			return {
				...state,
				comments: action.payload as CommentFeed,
			};
		case GET:
			return {
				...state,
				comments: action.payload as CommentFeed,
			};
		case DELETE:
			return {
				...state,
				comments: action.payload as CommentFeed,
			};
		default:
			return state;
	}
};

export default commentReducer;
