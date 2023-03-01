import { getNewPost } from '../redux/post/selectors';

import useAppSelector from './useAppSelector';

const useGetPost = () => {
	return useAppSelector(getNewPost);
};

export default useGetPost;
