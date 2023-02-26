import { Instalike } from '@jmetterrothan/instalike';

import { AppAction } from '../types';

export const DISCOVER = 'DISCOVER';

export type GetDiscoverAction = AppAction<typeof DISCOVER, Instalike.Post[]>;

export type DiscoverAction = GetDiscoverAction;

export const getDiscover = (data: Instalike.Post[]): GetDiscoverAction => ({
	type: DISCOVER,
	payload: data,
});
