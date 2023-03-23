import { RootState } from '../store';

export const postNewComment = (state: RootState) => state.comment.comments;
export const getComments = (state: RootState) => state.comment.comments;
export const postDeleteComment = (state: RootState) => state.comment.comments;
