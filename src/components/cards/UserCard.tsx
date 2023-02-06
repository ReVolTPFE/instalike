import { UserCardType } from '../../types/UserCardType';

function UserCard({ id, username, userImgUrl }: UserCardType) {
	return (
		<div
			className={`flex flex-col justify-evenly p-2 w-1/2 sm:w-1/3 md:w-1/5 
			${id >= 3 && id < 4 ? 'hidden sm:block' : ''} 
			${id >= 4 && id < 6 ? 'hidden md:block' : ''} 
			${id >= 6 ? 'hidden' : ''}`}
		>
			<div className="relative">
				<img className="rounded-full w-full" src={userImgUrl} alt="" />
				<i className="fa-solid fa-plus absolute bottom-0 right-0 text-lg hover:bg-gray-200 py-1 px-2 text-center rounded-full bg-white cursor-pointer"></i>
			</div>

			<h2 className="text-2xl">{username}</h2>
		</div>
	);
}

export default UserCard;