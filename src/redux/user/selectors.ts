import { RootState } from '../store';

export const selectUserSuggestions = (state: RootState) => state.userSuggestions.users;
