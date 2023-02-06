import { UserCardType } from '../../types/UserCardType';
import UserCard from '../cards/UserCard';

function SuggestionBlock() {
	const data: UserCardType[] = [
		{
			id: 1,
			username: 'isehgos',
			userImgUrl: 'https://pixy.org/src/487/4870083.jpg',
		},
		{
			id: 2,
			username: 'isehgos',
			userImgUrl: 'https://pixy.org/src/487/4870083.jpg',
		},
		{
			id: 3,
			username: 'isehgos',
			userImgUrl: 'https://pixy.org/src/487/4870083.jpg',
		},
		{
			id: 4,
			username: 'isehgos',
			userImgUrl: 'https://pixy.org/src/487/4870083.jpg',
		},
		{
			id: 5,
			username: 'isehgos',
			userImgUrl: 'https://pixy.org/src/487/4870083.jpg',
		},
		{
			id: 6,
			username: 'isehgos',
			userImgUrl: 'https://pixy.org/src/487/4870083.jpg',
		},
		{
			id: 7,
			username: 'isehgos',
			userImgUrl: 'https://pixy.org/src/487/4870083.jpg',
		},
	];

	return (
		<section className="flex flex-row justify-start items-center">
			{data.map((user) => (
				<UserCard key={user.id} id={user.id} username={user.username} userImgUrl={user.userImgUrl} />
			))}
		</section>
	);
}

export default SuggestionBlock;
