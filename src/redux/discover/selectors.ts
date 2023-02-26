import { RootState } from '../store';

export const selectDiscover = (state: RootState) => state.discover.posts;
