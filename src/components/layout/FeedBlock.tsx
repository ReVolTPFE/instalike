import { Instalike } from '@jmetterrothan/instalike';
import { useEffect } from 'react';

import { fetchFeedUserAsync } from '../../redux/feed/thunks';
import { fetchPostLikeAsync, fetchPostUnlikeAsync } from '../../redux/post/thunks';

import useAppDispatch from '../../hooks/useAppDispatch';
import useFeed from '../../hooks/useFeed';

import PostCard from '../cards/PostCard';

function FeedBlock() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchFeedUserAsync());
	}, []);

	const posts = useFeed();

	function a() {
		dispatch(fetchPostLikeAsync(41));
	}

	function aa() {
		dispatch(fetchPostUnlikeAsync(41));
	}

	return (
		<>
			<p onClick={a}>like</p>
			<p onClick={aa}>unlike</p>
			<section>
				{posts &&
					posts.map((post: Instalike.Post) => {
						return (
							<PostCard
								key={post.id}
								id={post.id}
								description={post.caption}
								imgUrl={post.resources[0].src}
								fullName={post.owner.fullName}
								location={post.location}
								commentStatus={post.hasCommentsDisabled}
								date={post.updatedAt}
								liked={post.viewerHasLiked}
								userId={post.owner.id}
								likesCount={post.likesCount}
								commentsCount={post.commentsCount}
							/>
						);
					})}
			</section>

			<h2 className="text-xl font-semibold text-center text-gray-600 mt-8">You are all caught up!</h2>
		</>
	);
}

export default FeedBlock;
