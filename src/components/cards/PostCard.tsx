/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { Instalike } from '@jmetterrothan/instalike';
import moment from 'moment';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { fetchDeletePostAsync } from '../../redux/post/thunks';
import { fetchPostLikeAsync, fetchPostUnlikeAsync } from '../../redux/postLikes/thunks';
import {
	fetchPostUserSuggestionsAddContactAsync,
	fetchPostUserSuggestionsRemoveContactAsync,
} from '../../redux/user/thunks';

import useAppDispatch from '../../hooks/useAppDispatch';

import { PostCardType } from '../../types/PostCardType';

import CommentForm from '../forms/CommentForm';

function PostCard({
	id,
	description = '',
	imgUrl,
	fullName,
	location = '',
	commentStatus = true,
	date,
	liked,
	userId,
	likesCount,
	commentsCount,
	previewLikes,
	previewComments,
	isFollowedByViewer,
	isViewer,
}: PostCardType) {
	const { t } = useTranslation();

	const formattedDate = moment(date).utc().format('DD-MM-YYYY');

	const [moreInfo, setMoreInfo] = useState(false);
	const [isLiked, setIsLiked] = useState(liked);
	const [likeNumber, setLikeNumber] = useState(likesCount);
	const [isFollowing, setIsFollowing] = useState(isFollowedByViewer);

	const numberOfImg = imgUrl.length;
	const [imgNumber, setImgNumber] = useState(0);

	function previousImg() {
		if (imgNumber > 0) {
			setImgNumber(imgNumber - 1);
		}
	}

	function nextImg() {
		if (imgNumber < numberOfImg - 1) {
			setImgNumber(imgNumber + 1);
		}
	}

	function toggleMoreInfo() {
		setMoreInfo(!moreInfo);
	}

	const dispatch = useAppDispatch();

	function onFollow() {
		dispatch(fetchPostUserSuggestionsAddContactAsync(userId));
		setIsFollowing(true);
	}

	function onUnfollow() {
		dispatch(fetchPostUserSuggestionsRemoveContactAsync(userId));
		setIsFollowing(false);
	}

	function copyPostLink() {
		navigator.clipboard.writeText('/post/' + id);
	}

	function deletePost() {
		dispatch(fetchDeletePostAsync(id));
	}

	function likePost() {
		if (isLiked !== true) {
			dispatch(fetchPostLikeAsync(id));
			setIsLiked(true);
			setLikeNumber(likeNumber + 1);
		} else {
			dispatch(fetchPostUnlikeAsync(id));
			setIsLiked(false);
			setLikeNumber(likeNumber - 1);
		}
	}

	return (
		<div className="my-8 rounded-xl border border-gray-300 w-full" id={`post-${id}`}>
			<div className="flex flex-row justify-between items-center py-4 px-6">
				<div className="flex flex-row items-center relative">
					<img className="w-14 h-14 rounded-full mr-4" src="/img/avatar.webp" alt="" />
					<div>
						<h2 className="text-lg font-bold">{fullName}</h2>
						<p>
							{location !== '' ? <i className="fa-solid fa-location-dot"></i> : ''}
							{location !== '' ? ` ${location}, ` : ''}
							{formattedDate}
						</p>
					</div>

					{isFollowing === false && isViewer === false ? (
						<button onClick={onFollow} className="mx-4 p-2 rounded bg-gray-200 text-black">
							{t('actions.follow')}
						</button>
					) : (
						''
					)}
				</div>

				<button onClick={toggleMoreInfo} className="py-1 px-4 hover:bg-gray-200 rounded relative z-10">
					<i className="text-xl fa-solid fa-ellipsis-vertical">
						<div
							className={`bg-white border border-gray-200 rounded-md p-2 absolute right-0 mt-4 ${
								moreInfo ? '' : 'hidden'
							}`}
						>
							{isFollowing === true && isViewer === false ? (
								<Link
									onClick={onUnfollow}
									to="#"
									className="font-sans font-semibold block text-sm my-1 p-1 rounded cursor-pointer hover:bg-red-200 text-red-500"
								>
									{t('actions.unfollow')}
								</Link>
							) : (
								''
							)}
							{isViewer === true ? (
								<Link
									onClick={deletePost}
									to="/feed"
									className="font-sans font-semibold block text-sm my-1 p-1 rounded cursor-pointer hover:bg-red-200 text-red-500"
								>
									{t('actions.delete')}
								</Link>
							) : (
								''
							)}
							<Link
								to={'/post/' + id}
								className="font-sans font-semibold block text-sm my-1 p-1 rounded cursor-pointer hover:bg-gray-200"
							>
								{t('actions.seePost')}
							</Link>
							<Link
								onClick={copyPostLink}
								to="#"
								className="font-sans font-semibold block text-sm my-1 p-1 rounded cursor-pointer hover:bg-gray-200"
							>
								{t('actions.copyLink')}
							</Link>
						</div>
					</i>
				</button>
			</div>

			<div className="relative h-96">
				{numberOfImg > 1 && imgNumber > 0 ? (
					<button
						className="absolute top-1/2 left-0 bg-black bg-opacity-50 rounded text-center ml-4 p-2"
						onClick={previousImg}
					>
						<i className="fa-solid fa-chevron-left text-white text-3xl"></i>
					</button>
				) : (
					''
				)}
				{numberOfImg > 1 && imgNumber < numberOfImg - 1 ? (
					<button
						className="absolute top-1/2 right-0 bg-black bg-opacity-50 rounded text-center mr-4 p-2"
						onClick={nextImg}
					>
						<i className="fa-solid fa-chevron-right text-white text-3xl"></i>
					</button>
				) : (
					''
				)}

				{/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
				<img
					onDoubleClick={likePost}
					className="cursor-pointer w-full h-full object-cover"
					src={imgUrl[imgNumber].src}
					alt="Post photo"
				/>
			</div>

			<div>
				<p className="m-4 text-gray-500">{description}</p>

				<div>
					<div id="likeBtn" className="relative inline-block mx-4">
						<button
							onClick={likePost}
							className="mb-4 bg-gray-200 rounded-full py-2 px-4 dark-mode-like-btn"
						>
							<i className={`fa-solid fa-heart ${isLiked ? 'text-red-500' : ''}`}>
								<span className={`ml-2 ${isLiked ? 'text-red-500' : ''}`}>{likeNumber}</span>
							</i>
						</button>

						<div
							id="peopleWhoLiked"
							className="absolute left-0 p-2 bg-white border rounded-lg border-gray-200 z-10"
						>
							{previewLikes &&
								previewLikes.map((like: Instalike.Like, index) => {
									if (previewLikes.length === 1 && isLiked === false) {
										return (
											<span key={like.id}>
												{like.owner.userName} {t('likes.liked')}
											</span>
										);
									} else if (
										previewLikes.length > 1 &&
										previewLikes.length <= 3 &&
										isLiked === false
									) {
										if (index != previewLikes.length - 1) {
											return <span key={like.id}>{like.owner.userName}, </span>;
										} else {
											return (
												<span key={like.id}>
													{like.owner.userName} {t('likes.likedPlural')}
												</span>
											);
										}
									} else if (previewLikes.length > 3 && isLiked === false) {
										if (index < 1) {
											return <span key={like.id}>{like.owner.userName}, </span>;
										} else if (index === 2) {
											return (
												<span key={like.id}>
													{like.owner.userName} {t('likes.and')} {likeNumber - 2}{' '}
													{t('likes.likedOthersPlural')}
												</span>
											);
										}
									}

									if (previewLikes.length > 0 && likeNumber <= 3 && isLiked === true) {
										if (index != previewLikes.length - 1) {
											return <span key={like.id}>{like.owner.userName}, </span>;
										} else {
											return (
												<span key={like.id}>
													{like.owner.userName} {t('likes.and')} {t('likes.you')}{' '}
													{t('likes.likedPlural')}
												</span>
											);
										}
									} else if (likeNumber > 3 && isLiked === true) {
										if (index < 2) {
											return <span key={like.id}>{like.owner.userName}, </span>;
										} else if (index === 2) {
											return (
												<span key={like.id}>
													{like.owner.userName}, {t('likes.you')} {t('likes.and')}{' '}
													{likeNumber - 4} {t('likes.likedOthersPlural')}
												</span>
											);
										}
									}
								})}

							{previewLikes.length === 0 && isLiked === true ? (
								<span>
									{t('likes.you')} {t('likes.youLiked')}
								</span>
							) : (
								''
							)}

							{previewLikes.length === 0 && isLiked === false ? (
								<span>
									{t('likes.nobody')} {t('likes.liked')}
								</span>
							) : (
								''
							)}
						</div>
					</div>
					<button className="mb-4 py-2 px-4">
						<i className="fa-regular fa-comment-dots">
							<span className="ml-2">{commentsCount}</span>
						</i>
					</button>
				</div>

				<div className="flex justify-center p-4 border-y">
					{commentStatus === true ? (
						<p>{t('comments.deactivated')}</p>
					) : (
						<div className="w-full flex flex-row items-center justify-between">
							<img className="w-14 h-14 rounded-full mr-4" src="/img/avatar.webp" alt="" />
							<CommentForm />
						</div>
					)}
				</div>

				{commentsCount > 0 && commentStatus === false
					? previewComments.map((comment: Instalike.Comment) => {
							return (
								<div key={comment.id} className="flex flex-row items-start w-full p-4">
									<img className="w-8 h-8 rounded-full mr-4" src="/img/avatar.webp" alt="" />
									<div className="flex flex-col items-start justify-center">
										<p>
											<span className="font-bold">{fullName} </span>
											<span>{comment.text}</span>
										</p>
										<p>{moment(comment.updatedAt).utc().format('DD-MM-YYYY')}</p>
									</div>
								</div>
							);
					  })
					: ''}
			</div>
		</div>
	);
}

export default PostCard;
