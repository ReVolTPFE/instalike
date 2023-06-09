import { RootState } from '../store';

export const selectUserSuggestions = (state: RootState) => state.userSuggestions.users;
export const postUserSuggestionsAddContact = (state: RootState) => state.userSuggestions.user;
export const postUserSuggestionsRemoveContact = (state: RootState) => state.userSuggestions.user;
