import { Link } from 'react-router-dom';

import { PhotoCardType } from '../../types/PhotoCardType';

function PhotoCard({ id, imgUrl, liked, likesCount, commentsCount }: PhotoCardType) {
	return (
		<Link to={'/post/' + id}>
			<div className="relative cursor-pointer">
				<div className="absolute rounded-xl w-full h-full flex justify-center items-center hover:bg-gray-800 hover:bg-opacity-80 opacity-0 hover:opacity-100">
					<p className="text-white font-bold">
						<i className={`mx-2 fa-solid fa-heart ${liked ? 'text-red-500' : ''}`}>
							<span className={`ml-2 ${liked ? 'text-red-500' : ''}`}>{likesCount}</span>
						</i>
						<i className="mx-2 fa-regular fa-comment-dots">
							<span className="ml-2">{commentsCount}</span>
						</i>
					</p>
				</div>
				<img className="rounded-xl aspect-square w-full h-full object-cover" src={imgUrl} alt="" />
			</div>
		</Link>
	);
}

export default PhotoCard;
