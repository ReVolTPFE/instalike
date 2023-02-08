import { selectFeed } from '../redux/feed/selectors';

import useAppSelector from './useAppSelector';

const useFeed = () => {
	return useAppSelector(selectFeed);
};

export default useFeed;
