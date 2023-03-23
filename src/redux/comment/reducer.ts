import { Instalike } from '@jmetterrothan/instalike';
import { Reducer } from 'redux';

import { CommentAction, POST, DELETE, GET } from './actions';

type CommentState = {
	comments?: Instalike.Comment[];
};

const initialState: CommentState = {
	comments: [],
};

const commentReducer: Reducer<CommentState, CommentAction> = (state = initialState, action) => {
	switch (action.type) {
		case POST:
			return {
				...state,
				comments: action.payload as Instalike.Comment[],
			};
		case GET:
			return {
				...state,
				comments: action.payload as Instalike.Comment[],
			};
		case DELETE:
			return {
				...state,
				comments: action.payload as Instalike.Comment[],
			};
		default:
			return state;
	}
};

export default commentReducer;
