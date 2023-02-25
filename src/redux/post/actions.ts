import { AppAction } from '../types';

export const LIKE = 'POST/LIKE';
export const UNLIKE = 'POST/UNLIKE';

export type PostLikeAction = AppAction<typeof LIKE>;
export type PostUnlikeAction = AppAction<typeof UNLIKE>;

export type LikeAction = PostLikeAction | PostUnlikeAction;

export const postLike = (): PostLikeAction => ({
	type: LIKE,
	payload: null,
});

export const postUnlike = (): PostUnlikeAction => ({
	type: UNLIKE,
	payload: null,
});
