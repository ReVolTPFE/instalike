import { AppAction } from '../types';

export const FEED = 'FEED/GET_FEED';

export type GetFeedAction = AppAction<typeof FEED>;

export type FeedAction = GetFeedAction;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getFeed = (data: any): GetFeedAction => ({
	type: FEED,
	payload: data,
});
