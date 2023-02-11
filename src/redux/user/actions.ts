import { Instalike } from '@jmetterrothan/instalike';

import { AppAction } from '../types';

export const USER_SUGGESTIONS = 'USER/GET_USER_SUGGESTIONS';

export type GetUserSuggestionsAction = AppAction<typeof USER_SUGGESTIONS, Instalike.User[]>;

export type UserSuggestionsAction = GetUserSuggestionsAction;

export const getUserSuggestions = (data: Instalike.User[]): GetUserSuggestionsAction => ({
	type: USER_SUGGESTIONS,
	payload: data,
});
