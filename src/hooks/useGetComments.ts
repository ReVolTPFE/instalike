import { getComments } from '../redux/comment/selectors';

import useAppSelector from './useAppSelector';

const useGetComments = () => {
	return useAppSelector(getComments);
};

export default useGetComments;
