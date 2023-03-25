import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import { fetchGetPostAsync } from '../redux/post/thunks';
import { AppThunkDispatch } from '../redux/types';

import PostCard from '../components/cards/PostCard';
import Header from '../components/layout/Header';

import useGetPost from '../hooks/useGetPost';

function PostView() {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const params: string | any = useParams();
	const id = parseInt(params.id);

	const dispatch = useDispatch<AppThunkDispatch>();

	useEffect(() => {
		dispatch(fetchGetPostAsync(id));
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
						imgUrl={post.resources}
						fullName={post.owner.fullName}
						location={post.location}
						commentStatus={post.hasCommentsDisabled}
						date={post.updatedAt}
						liked={post.viewerHasLiked}
						userId={post.owner.id}
						likesCount={post.likesCount}
						commentsCount={post.commentsCount}
						previewLikes={post.previewLikes}
						previewComments={post.previewComments}
						isFollowedByViewer={post.owner.isFollowedByViewer}
						isViewer={post.owner.isViewer}
					/>
				)}
			</main>
		</>
	);
}

export default PostView;
