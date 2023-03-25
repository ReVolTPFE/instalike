import { SetStateAction } from 'react';
import { Reducer } from 'redux';

import { FeedAction, FEED } from './actions';

type FeedState = {
	posts: {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		nextCursor: SetStateAction<string | any>;
		items: [];
	};
};

const initialState: FeedState = {
	posts: {
		nextCursor: '',
		items: [],
	},
};

const feedReducer: Reducer<FeedState, FeedAction> = (state = initialState, action) => {
	switch (action.type) {
		case FEED:
			return {
				...state,
				posts: action.payload,
			} as FeedState;
		default:
			return state as FeedState;
	}
};

export default feedReducer;
