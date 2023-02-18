import { postUserSuggestionsAddContact } from '../redux/user/selectors';

import useAppSelector from './useAppSelector';

const useUserSuggestionsAddContact = () => {
	return useAppSelector(postUserSuggestionsAddContact);
};

export default useUserSuggestionsAddContact;
