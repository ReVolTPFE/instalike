/* eslint-disable @typescript-eslint/no-explicit-any */
import { PostData } from '@jmetterrothan/instalike';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { fetchNewPostAsync } from '../../redux/post/thunks';

import useAppDispatch from '../../hooks/useAppDispatch';

import '../../i18n';

interface PostFormProps {
	togglePostForm: any;
	showed: boolean;
	onPostFormChange: any;
}

function PostForm({ togglePostForm, showed, onPostFormChange }: PostFormProps) {
	const { t } = useTranslation();

	const [previewImage, setPreviewImage] = useState('');

	function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
		onPostFormChange();

		const selectedFile = e.target.files?.[0];

		if (selectedFile) {
			const objectUrl = URL.createObjectURL(selectedFile);
			setPreviewImage(objectUrl);
		}
	}

	let postData: PostData = {
		resources: [],
		location: '',
		caption: '',
		accessibilityCaption: '',
		hasCommentsDisabled: false,
	};

	const dispatch = useAppDispatch();

	const fileInput = document.getElementById('imageFiles');
	const locationInput = document.getElementById('location');
	const captionInput = document.getElementById('caption');
	const commentsStatusInput = document.getElementById('commentsStatus');

	function handleSubmit(e: Event) {
		e.preventDefault();

		for (let i = 0; i < fileInput.files.length; i++) {
			if (i < 6) {
				postData.resources.push(fileInput.files[i]);
			}
		}

		postData.location = locationInput.value;
		postData.caption = captionInput.value;
		postData.accessibilityCaption = captionInput.value;
		if (commentsStatusInput.checked === true) {
			postData.hasCommentsDisabled = true;
		} else {
			postData.hasCommentsDisabled = false;
		}

		dispatch(fetchNewPostAsync(postData));

		handlePostFormClick();
	}

	function handlePostFormClick() {
		togglePostForm();

		postData = {
			resources: [],
			location: '',
			caption: '',
			accessibilityCaption: '',
			hasCommentsDisabled: false,
		};

		fileInput.value = '';
		locationInput.value = '';
		captionInput.value = '';
		commentsStatusInput.checked = false;
	}

	return (
		<div
			className={`absolute w-full h-screen bg-black bg-opacity-80 flex justify-center items-center z-40 overflow-hidden ${
				showed === true ? '' : 'hidden'
			}`}
		>
			<div className="rounded bg-white p-4 border border-gray-200 z-50">
				<h2 className="text-center text-xl font-bold">{t('title.postForm')}</h2>

				<form action="" method="post" className="flex flex-row text-center relative">
					<div className="w-1/2">
						<input
							className="hidden"
							type="file"
							name="imageFiles"
							id="imageFiles"
							onChange={handleImageChange}
							multiple
							accept=".png, .jpg, .jpeg"
						/>
						{previewImage ? (
							<img className="w-full aspect-video object-contain" src={previewImage} alt="" />
						) : (
							<img className="w-full aspect-video" src="/img/default.png" alt="" />
						)}
					</div>
					<div className="w-1/2 flex flex-col">
						<textarea
							className="m-2 p-2 rounded focus:border-blue-500 border border-gray-400 bg-white text-black"
							name="caption"
							id="caption"
							placeholder={t('form.postDescription') || 'Write a caption...'}
						/>
						<input
							className="m-2 p-2 rounded focus:border-blue-500 border border-gray-400 bg-white text-black"
							type="text"
							name="location"
							id="location"
							placeholder={t('form.postLocalisation') || 'Localisation'}
						/>

						<div className="m-2 flex flex-row items-center">
							<label htmlFor="commentsStatus">
								{t('form.postCommentingStatus') || 'Turn off commenting'}
							</label>
							<input className="ml-2" type="checkbox" name="commentsStatus" id="commentsStatus" />
						</div>

						<div className="flex flex-row justify-center items-center">
							<Link
								to={'/feed'}
								onClick={handlePostFormClick}
								className="m-2 p-2 rounded hover:bg-gray-200 font-bold cursor-pointer"
							>
								{t('form.cancel') || 'Cancel'}
							</Link>
							<input
								className="m-2 p-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold cursor-pointer"
								type="submit"
								value={t('form.submit') || 'Submit'}
								onClick={handleSubmit}
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default PostForm;
