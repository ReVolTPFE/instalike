import { postUserSuggestionsRemoveContact } from '../redux/user/selectors';

import useAppSelector from './useAppSelector';

const useUserSuggestionsRemoveContact = () => {
	return useAppSelector(postUserSuggestionsRemoveContact);
};

export default useUserSuggestionsRemoveContact;
