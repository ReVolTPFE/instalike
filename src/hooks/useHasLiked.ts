import type { RootState } from '../redux/store';

import useAppSelector from './useAppSelector';

const selectHasLiked = (state: RootState) => state.like.hasLiked;

const useHasLiked = () => {
	return useAppSelector(selectHasLiked);
};

export default useHasLiked;
