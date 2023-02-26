import { Instalike } from '@jmetterrothan/instalike';
import { Reducer } from 'redux';

import { DiscoverAction, DISCOVER } from './actions';

type DiscoverState = {
	posts: Instalike.Post[];
};

const initialState: DiscoverState = {
	posts: [],
};

const discoverReducer: Reducer<DiscoverState, DiscoverAction> = (state = initialState, action) => {
	switch (action.type) {
		case DISCOVER:
			return {
				...state,
				posts: action.payload,
			};
		default:
			return state;
	}
};

export default discoverReducer;
