import { PostCardType } from '../../types/PostCardType';

function PostCard({
	id,
	description = '',
	imgUrl = 'https://png.pngtree.com/back_origin_pic/00/06/05/09a27b971263bbfe983a315a2591cc75.jpg',
	username,
	userImgUrl = 'https://pixy.org/src/487/4870083.jpg',
	location = '',
	commentStatus = true,
	date,
}: PostCardType) {
	return (
		<div className="my-8 rounded-xl border border-gray-300" id={`post-${id}`}>
			<div className="flex flex-row justify-between items-center py-4 px-6">
				<div className="flex flex-row items-center relative">
					<img className="w-14 h-14 rounded-full mr-4" src={userImgUrl} alt="" />
					<div>
						<h2 className="text-lg font-bold">{username}</h2>
						{/* <p>
							{location !== ''
								? `<i className="fa-solid fa-location-dot"></i> ${location}, ${date}`
								: `${date}`}
						</p> */}
						<p className="text-gray-600">{`${location}, ${date}`}</p>
					</div>
				</div>

				<button className="py-1 px-4 hover:bg-gray-200 rounded">
					<i className="text-xl fa-solid fa-ellipsis-vertical"></i>
				</button>
			</div>

			{/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
			<img className="w-full h-full object-cover" src={imgUrl} alt="Post photo" />

			<div>
				<p className="m-4 text-gray-500">{description}</p>

				<div>
					<button className="mx-4 mb-4 bg-gray-200 rounded-full py-2 px-4">
						<i className="fa-solid fa-heart">
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
