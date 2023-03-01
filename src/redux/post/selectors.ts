import { RootState } from '../store';

export const postNewPost = (state: RootState) => state.post.posts;
export const getNewPost = (state: RootState) => state.post.post;
export const postDeletePost = (state: RootState) => state.post.posts;
