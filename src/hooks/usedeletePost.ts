import { postDeletePost } from '../redux/post/selectors';

import useAppSelector from './useAppSelector';

const useDeletePost = () => {
	return useAppSelector(postDeletePost);
};

export default useDeletePost;
