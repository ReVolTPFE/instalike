import { Instalike } from '@jmetterrothan/instalike';
import { useEffect } from 'react';

import { fetchGetUserSuggestionsAsync } from '../../redux/user/thunks';

import useAppDispatch from '../../hooks/useAppDispatch';
import useUserSuggestions from '../../hooks/useUserSuggestions';

import UserCard from '../cards/UserCard';

function SuggestionBlock() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchGetUserSuggestionsAsync());
	}, []);

	const users = useUserSuggestions();

	return (
		<section className="flex flex-row justify-start items-start">
			{users &&
				users.map((user: Instalike.User, id) => {
					return <UserCard key={user.id} id={user.id} suggestionId={id} fullName={user.fullName} />;
				})}
		</section>
	);
}

export default SuggestionBlock;
