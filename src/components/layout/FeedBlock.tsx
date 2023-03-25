import { Instalike } from '@jmetterrothan/instalike';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import '../../i18n';
import { ACCESS_TOKEN_KEY } from '../../instalikeApi';
import PostCard from '../cards/PostCard';

function FeedBlock() {
	const [feedCursor, setFeedCursor] = useState(null);
	const [feed, setFeed] = useState([]);
	const [isEndOfFeed, setIsEndOfFeed] = useState(false);

	const { t } = useTranslation();

	const token = window.localStorage.getItem(ACCESS_TOKEN_KEY);

	const config = {
		method: 'get',
		url: 'https://api.instalike.fr/v1/users/me/feed?cursor=' + feedCursor,
		headers: {
			Authorization: 'Bearer ' + token,
		},
	};

	useEffect(() => {
		axios
			.request(config)
			.then((response) => {
				setFeed(response.data.items);

				if (response.data.nextCursor !== null) {
					setFeedCursor(response.data.nextCursor);
				} else {
					setIsEndOfFeed(true);
				}
			})
			.catch((error) => {
				console.error(error);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function getNextPosts() {
		axios
			.request(config)
			.then((response) => {
				setFeed((prevState) => prevState.concat(response.data.items));

				if (response.data.nextCursor !== null) {
					setFeedCursor(response.data.nextCursor);
				} else {
					setIsEndOfFeed(true);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	}

	return (
		<>
			<section>
				{feed.length > 0
					? feed.map((post: Instalike.Post) => {
							return (
								<PostCard
									key={post.id}
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
							);
					  })
					: ''}
			</section>

			{isEndOfFeed === false ? (
				<div className="flex justify-center items-center">
					<button
						className="text-xl font-semibold text-center text-gray-600 mt-8 p-2 rounded-lg bg-gray-200"
						onClick={getNextPosts}
					>
						{t('actions.loadMore')}
					</button>
				</div>
			) : (
				<h2 className="text-xl font-semibold text-center text-gray-600 mt-8">{t('title.allPostsLoaded')}</h2>
			)}
		</>
	);
}

export default FeedBlock;
