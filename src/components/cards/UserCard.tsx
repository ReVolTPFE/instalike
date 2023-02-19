import { fetchPostUserSuggestionsAddContactAsync } from '../../redux/user/thunks';

import useAppDispatch from '../../hooks/useAppDispatch';

import { UserCardType } from '../../types/UserCardType';

interface UserCardProps extends UserCardType {
	onAddFriend: any;
}

function UserCard({ id, suggestionId = 0, fullName, onAddFriend }: UserCardProps) {
	const dispatch = useAppDispatch();

	function handleClick() {
		dispatch(fetchPostUserSuggestionsAddContactAsync(id));
		onAddFriend();
	}

	return (
		<div
			className={`flex flex-col justify-evenly p-2 w-1/2 sm:w-1/3 md:w-1/5 
			${suggestionId >= 3 && suggestionId < 4 ? 'hidden sm:block' : ''} 
			${suggestionId >= 4 && suggestionId < 6 ? 'hidden md:block' : ''} 
			${suggestionId >= 6 ? 'hidden' : ''}`}
		>
			<div className="relative">
				<img className="rounded-full w-full" src="img/avatar.webp" alt="" />
				<button onClick={handleClick}>
					<i className="fa-solid fa-plus absolute bottom-0 right-0 text-lg hover:bg-gray-200 py-1 px-2 text-center rounded-full bg-white cursor-pointer"></i>
				</button>
			</div>

			<h2 className="text-md overflow-hidden">
				{fullName.slice(0, 15)}
				{fullName.length > 15 ? '...' : ''}
			</h2>
		</div>
	);
}

export default UserCard;
