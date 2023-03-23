import { Instalike } from '@jmetterrothan/instalike';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ACCESS_TOKEN_KEY } from '../../instalikeApi';
import PhotoCard from '../cards/PhotoCard';

function DiscoverBlock() {
	const [feedCursor, setFeedCursor] = useState(null);
	const [feed, setFeed] = useState(null);
	const [isEndOfFeed, setIsEndOfFeed] = useState(false);

	const { t } = useTranslation();

	const token = window.localStorage.getItem(ACCESS_TOKEN_KEY);

	const config = {
		method: 'get',
		url: 'https://api.instalike.fr/v1/posts?cursor=' + feedCursor,
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
		<main className="w-full md:mx-auto md:px-8 lg:px-40 py-8">
			<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 relative px-4">
				{feed !== null
					? feed.map((post: Instalike.Post) => {
							return (
								<PhotoCard
									key={post.id}
									id={post.id}
									imgUrl={post.resources}
									liked={post.viewerHasLiked}
									likesCount={post.likesCount}
									commentsCount={post.commentsCount}
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
		</main>
	);
}

export default DiscoverBlock;
