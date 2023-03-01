import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import useAppDispatch from '../../hooks/useAppDispatch';

import '../../i18n';

function CommentForm() {
	const { t } = useTranslation();

	const dispatch = useAppDispatch();

	const [comment, setComment] = useState('');

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		// dispatch();
	}

	return (
		<form action="" method="post" className="flex flex-row text-center comment-form w-full" onSubmit={handleSubmit}>
			<input
				className="m-2 p-2 rounded text-black bg-white focus:outline-none flex-1"
				type="text"
				name="comment"
				value={comment}
				onChange={(event) => setComment(event.target.value)}
				placeholder={t('form.comment') || 'Add a comment...'}
				required
			/>

			<input
				className="m-2 p-2 rounded bg-gray-400 text-white font-bold cursor-pointer"
				type="submit"
				value={t('actions.publish') || 'Publish'}
			/>
		</form>
	);
}

export default CommentForm;
