import { selectUserSuggestions } from '../redux/user/selectors';

import useAppSelector from './useAppSelector';

const useUserSuggestions = () => {
	return useAppSelector(selectUserSuggestions);
};

export default useUserSuggestions;
