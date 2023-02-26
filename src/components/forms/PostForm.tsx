import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import '../../i18n';

function PostForm() {
	const { t } = useTranslation();

	const [previewImage, setPreviewImage] = useState('');

	function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
		const selectedFile = e.target.files?.[0];

		if (selectedFile) {
			const objectUrl = URL.createObjectURL(selectedFile);
			setPreviewImage(objectUrl);
			console.log(previewImage);
		}
	}

	return (
		<div className="rounded bg-white p-4 border border-red-500">
			<h2 className="text-center text-xl font-bold">{t('title.postForm')}</h2>

			<form action="" method="post" className="flex flex-row text-center relative">
				<div className="w-1/2">
					<input type="file" name="image" id="image" onChange={handleImageChange} />
					{previewImage ? (
						<img className="w-full aspect-video object-contain" src={previewImage} alt="" />
					) : (
						<img className="w-full aspect-video" src="img/default.png" alt="" />
					)}
				</div>
				<div className="w-1/2 flex flex-col">
					<textarea
						className="m-2 p-2 rounded focus:border-blue-500 border border-gray-400"
						name="description"
						id="description"
						placeholder={t('form.postDescription') || 'Write a caption...'}
					/>
					<input
						className="m-2 p-2 rounded focus:border-blue-500 border border-gray-400"
						type="text"
						name="localisation"
						id="localisation"
						placeholder={t('form.postLocalisation') || 'Localisation'}
					/>

					<div className="m-2 flex flex-row items-center">
						<label htmlFor="commentStatus">{t('form.postCommentingStatus') || 'Turn off commenting'}</label>
						<input className="ml-2" type="checkbox" name="commentStatus" id="commentStatus" />
					</div>

					<div className="flex flex-row justify-center items-center">
						<button className="m-2 p-2 rounded hover:bg-gray-200 font-bold cursor-pointer">
							{t('form.cancel') || 'Cancel'}
						</button>
						<input
							className="m-2 p-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold cursor-pointer"
							type="submit"
							value={t('form.submit') || 'Submit'}
						/>
					</div>
				</div>
			</form>
		</div>
	);
}

export default PostForm;
