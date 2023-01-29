import { PostCardType } from '../../types/PostCardType';
import PostCard from '../cards/PostCard';

function FeedBlock() {
	const data: PostCardType[] = [
		{
			id: 1,
			description: 'guish zirjziojr  ij iqozji zjri qjri j',
			imgUrl: 'https://png.pngtree.com/back_origin_pic/00/06/05/09a27b971263bbfe983a315a2591cc75.jpg',
			username: 'isehgos',
			userImgUrl: 'https://pixy.org/src/487/4870083.jpg',
			location: 'zojdqpp zodko',
			commentStatus: true,
			date: '2023-01-05',
		},
		{
			id: 2,
			description: 'guish zirjziojr  ij iqozji zjri qjri j',
			imgUrl: 'https://pixy.org/src/487/4870083.jpg',
			username: 'isehgos',
			userImgUrl: 'https://pixy.org/src/487/4870083.jpg',
			location: 'zojdqpp zodko',
			commentStatus: true,
			date: '2023-01-05',
		},
		{
			id: 3,
			description: 'guish zirjziojr  ij iqozji zjri qjri j',
			imgUrl: 'https://png.pngtree.com/back_origin_pic/00/06/05/09a27b971263bbfe983a315a2591cc75.jpg',
			username: 'isehgos',
			userImgUrl: 'https://pixy.org/src/487/4870083.jpg',
			location: 'zojdqpp zodko',
			commentStatus: true,
			date: '2023-01-05',
		},
		{
			id: 4,
			description: 'guish zirjziojr  ij iqozji zjri qjri j',
			imgUrl: 'https://png.pngtree.com/back_origin_pic/00/06/05/09a27b971263bbfe983a315a2591cc75.jpg',
			username: 'isehgos',
			userImgUrl: 'https://pixy.org/src/487/4870083.jpg',
			location: 'zojdqpp zodko',
			commentStatus: true,
			date: '2023-01-05',
		},
	];

	return (
		<main className="w-full px-4 md:mx-auto md:w-2/3 lg:w-1/2 py-8">
			<section className="">
				{data.map((post) => (
					<PostCard
						key={post.id}
						id={post.id}
						description={post.description}
						imgUrl={post.imgUrl}
						username={post.username}
						userImgUrl={post.userImgUrl}
						location={post.location}
						commentStatus={post.commentStatus}
						date={post.date}
					/>
				))}
			</section>

			<h2 className="text-xl font-semibold text-center text-gray-600 mt-8">You are all caught up!</h2>
		</main>
	);
}

export default FeedBlock;
