import { Reducer } from 'redux';

import { LikeAction, LIKE, UNLIKE } from './actions';

type LikeState = {
	hasLiked: boolean;
};

const initialState: LikeState = {
	hasLiked: false,
};

const likeReducer: Reducer<LikeState, LikeAction> = (state = initialState, action) => {
	switch (action.type) {
		case LIKE:
			return {
				...state,
				hasLiked: true,
			};
		case UNLIKE:
			return {
				...state,
				hasLiked: false,
			};
		default:
			return state;
	}
};

export default likeReducer;
