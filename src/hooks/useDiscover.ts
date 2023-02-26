import { selectDiscover } from '../redux/discover/selectors';

import useAppSelector from './useAppSelector';

const useDiscover = () => {
	return useAppSelector(selectDiscover);
};

export default useDiscover;
