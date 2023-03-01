import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import { fetchGetPostAsync } from '../redux/post/thunks';

import PostCard from '../components/cards/PostCard';
import Header from '../components/layout/Header';

import useGetPost from '../hooks/useGetPost';

function PostView() {
	const params: string | any = useParams();
	const id = parseInt(params.id);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchGetPostAsync(id));
	}, []);

	const post = useGetPost();

	return (
		<>
			<Header />

			<main className="flex justify-center items-center px-4 md:w-2/3 lg:w-1/2 mx-auto">
				{post && (
					<PostCard
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
						previewLikes={post.previewLikes}
						isFollowedByViewer={post.owner.isFollowedByViewer}
						isViewer={post.owner.isViewer}
					/>
				)}
			</main>
		</>
	);
}

export default PostView;
