import { Instalike } from '@jmetterrothan/instalike';
import { useEffect } from 'react';

import { fetchDiscoverUserAsync } from '../../redux/discover/thunks';

import useAppDispatch from '../../hooks/useAppDispatch';
import useDiscover from '../../hooks/useDiscover';

import PhotoCard from '../cards/PhotoCard';

function DiscoverBlock() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchDiscoverUserAsync());
	}, []);

	const posts = useDiscover();

	return (
		<main className="w-full md:mx-auto md:px-8 lg:px-40 py-8">
			<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 relative px-4">
				{posts &&
					posts.map((post: Instalike.Post) => {
						return (
							<PhotoCard
								key={post.id}
								id={post.id}
								imgUrl={post.resources[0].src}
								liked={post.viewerHasLiked}
								likesCount={post.likesCount}
								commentsCount={post.commentsCount}
							/>
						);
					})}
			</section>

			<h2 className="text-xl font-semibold text-center text-gray-600 mt-8">You are all caught up!</h2>
		</main>
	);
}

export default DiscoverBlock;
