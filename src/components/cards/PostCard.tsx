import moment from 'moment';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { fetchPostUserSuggestionsRemoveContactAsync } from '../../redux/user/thunks';

import useAppDispatch from '../../hooks/useAppDispatch';

import { PostCardType } from '../../types/PostCardType';

function PostCard({
	id,
	description = '',
	imgUrl = 'https://png.pngtree.com/back_origin_pic/00/06/05/09a27b971263bbfe983a315a2591cc75.jpg',
	fullName,
	location = '',
	commentStatus = true,
	date,
	liked,
	userId,
}: PostCardType) {
	const formattedDate = moment(date).utc().format('DD-MM-YYYY');

	const [moreInfo, setMoreInfo] = useState(false);

	function toggleMoreInfo() {
		setMoreInfo(!moreInfo);
	}

	const dispatch = useAppDispatch();

	function onUnfollow() {
		dispatch(fetchPostUserSuggestionsRemoveContactAsync(userId));
	}

	function copyPostLink() {
		navigator.clipboard.writeText('http://127.0.0.1:5173/post/' + id);
	}

	return (
		<div className="my-8 rounded-xl border border-gray-300" id={`post-${id}`}>
			<div className="flex flex-row justify-between items-center py-4 px-6">
				<div className="flex flex-row items-center relative">
					<img className="w-14 h-14 rounded-full mr-4" src="img/avatar.webp" alt="" />
					<div>
						<h2 className="text-lg font-bold">{fullName}</h2>
						<p>
							{location !== '' ? <i className="fa-solid fa-location-dot"></i> : ''}
							{location !== '' ? ` ${location}, ` : ''}
							{formattedDate}
						</p>
					</div>
				</div>

				<button onClick={toggleMoreInfo} className="py-1 px-4 hover:bg-gray-200 rounded relative">
					<i className="text-xl fa-solid fa-ellipsis-vertical">
						<div
							className={`bg-white border border-gray-200 rounded-md p-2 absolute right-0 mt-4 ${
								moreInfo ? '' : 'hidden'
							}`}
						>
							<Link
								onClick={onUnfollow}
								to="#"
								className="font-sans font-semibold block text-sm my-1 p-1 rounded cursor-pointer hover:bg-red-200 text-red-500"
							>
								Unfollow
							</Link>
							<Link
								to="/post/id"
								className="font-sans font-semibold block text-sm my-1 p-1 rounded cursor-pointer hover:bg-gray-200"
							>
								See publication
							</Link>
							<Link
								onClick={copyPostLink}
								to="#"
								className="font-sans font-semibold block text-sm my-1 p-1 rounded cursor-pointer hover:bg-gray-200"
							>
								Copy link
							</Link>
						</div>
					</i>
				</button>
			</div>

			{/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
			<img className="w-full h-full object-cover" src={imgUrl} alt="Post photo" />

			<div>
				<p className="m-4 text-gray-500">{description}</p>

				<div>
					<button className="mx-4 mb-4 bg-gray-200 rounded-full py-2 px-4">
						<i className={`fa-solid fa-heart ${liked ? 'text-red-500' : ''}`}>
							<span className="ml-2">2</span>
						</i>
					</button>
					<button className="mb-4 py-2 px-4">
						<i className="fa-regular fa-comment-dots">
							<span className="ml-2">1</span>
						</i>
					</button>
				</div>
			</div>
		</div>
	);
}

export default PostCard;
