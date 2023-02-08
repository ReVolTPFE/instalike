import { Instalike } from '@jmetterrothan/instalike';

import { AppAction } from '../types';

export const FEED = 'FEED/GET_FEED';

export type GetFeedAction = AppAction<typeof FEED, Instalike.Post[]>;

export type FeedAction = GetFeedAction;

export const getFeed = (data: Instalike.Post[]): GetFeedAction => ({
	type: FEED,
	payload: data,
});
