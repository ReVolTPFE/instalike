import { Instalike } from '@jmetterrothan/instalike';
import { useEffect } from 'react';

import { fetchUserSuggestionsAsync } from '../../redux/user/thunks';

import useAppDispatch from '../../hooks/useAppDispatch';
import useUserSuggestions from '../../hooks/useUserSuggestions';

import UserCard from '../cards/UserCard';

function SuggestionBlock() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchUserSuggestionsAsync());
	}, []);

	const users = useUserSuggestions();
	return (
		<section className="flex flex-row justify-start items-start">
			{users &&
				users.map((user: Instalike.User, id) => {
					console.log(user);
					return <UserCard key={user.id} id={id} fullName={user.fullName} />;
				})}
		</section>
	);
}

export default SuggestionBlock;
