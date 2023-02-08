import { Instalike } from '@jmetterrothan/instalike';
import { Reducer } from 'redux';

import { FeedAction, FEED } from './actions';

type FeedState = {
	posts: Instalike.Post[];
};

const initalState: FeedState = {
	posts: [],
};

const feedReducer: Reducer<FeedState, FeedAction> = (state = initalState, action) => {
	switch (action.type) {
		case FEED:
			return {
				...state,
				posts: action.payload,
			};
		default:
			return state;
	}
};

export default feedReducer;
