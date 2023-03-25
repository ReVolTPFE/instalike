import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { fetchDeleteCommentAsync } from '../../redux/comment/thunks';

import useAppDispatch from '../../hooks/useAppDispatch';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CommentDeleteBtn({ postId, commentId, refreshComments }: any) {
	const [isOpen, setIsOpen] = useState(false);

	const { t } = useTranslation();

	const dispatch = useAppDispatch();

	function open() {
		setIsOpen(!isOpen);
	}

	async function deleteComment() {
		await dispatch(fetchDeleteCommentAsync(postId, commentId));

		refreshComments();
	}

	return (
		<div className="flex flex-1 justify-end">
			<button onClick={open} className="py-1 px-4 hover:bg-gray-200 rounded relative z-10">
				<i className="text-xl fa-solid fa-ellipsis-vertical z-10">
					<div
						className={`bg-white border border-gray-200 rounded-md absolute right-0 mt-4 ${
							isOpen ? '' : 'hidden'
						}`}
					>
						<Link
							onClick={deleteComment}
							to="/feed"
							className="font-sans font-semibold block text-sm my-1 p-1 rounded cursor-pointer hover:bg-red-200 text-red-500 z-50"
						>
							{t('actions.delete')}
						</Link>
					</div>
				</i>
			</button>
		</div>
	);
}

export default CommentDeleteBtn;
