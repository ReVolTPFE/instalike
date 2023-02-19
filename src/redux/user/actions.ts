import { Instalike } from '@jmetterrothan/instalike';

import { AppAction } from '../types';

export const USER_SUGGESTIONS = 'USER/GET_USER_SUGGESTIONS';
export const USER_SUGGESTIONS_ADD_CONTACT = 'USER/USER_SUGGESTIONS_ADD_CONTACT';
export const USER_SUGGESTIONS_REMOVE_CONTACT = 'USER/USER_SUGGESTIONS_REMOVE_CONTACT';

export type GetUserSuggestionsAction = AppAction<typeof USER_SUGGESTIONS, Instalike.User[]>;
export type PostUserSuggestionsAddContactAction = AppAction<typeof USER_SUGGESTIONS_ADD_CONTACT, Instalike.User>;
export type PostUserSuggestionsRemoveContactAction = AppAction<typeof USER_SUGGESTIONS_REMOVE_CONTACT, Instalike.User>;

export type UserSuggestionsAction =
	| GetUserSuggestionsAction
	| PostUserSuggestionsAddContactAction
	| PostUserSuggestionsRemoveContactAction;

export const getUserSuggestions = (data: Instalike.User[]): GetUserSuggestionsAction => ({
	type: USER_SUGGESTIONS,
	payload: data,
});

export const postUserSuggestionsAddContact = (data: Instalike.User): PostUserSuggestionsAddContactAction => ({
	type: USER_SUGGESTIONS_ADD_CONTACT,
	payload: data,
});

export const postUserSuggestionsRemoveContact = (data: Instalike.User): PostUserSuggestionsRemoveContactAction => ({
	type: USER_SUGGESTIONS_REMOVE_CONTACT,
	payload: data,
});
