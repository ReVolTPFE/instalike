import { postNewPost } from '../redux/post/selectors';

import useAppSelector from './useAppSelector';

const useAddNewPost = () => {
	return useAppSelector(postNewPost);
};

export default useAddNewPost;
