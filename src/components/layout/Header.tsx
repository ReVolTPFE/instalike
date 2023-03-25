/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { logoutAsync } from '../../redux/auth/thunks';
import { AppThunkDispatch } from '../../redux/types';

import Language from '../../enums/Language';

import '../../i18n';
import PostForm from '../forms/PostForm';

function Header() {
	const { t, i18n } = useTranslation();

	const [moreInfo, setMoreInfo] = useState(false);
	const [language, setLanguage] = useState(Language.FR);
	const [moreInfoMobile, setMoreInfoMobile] = useState(false);

	const [postFormState, setPostFormState] = useState(false);

	const body = document.getElementById('body');
	const fileInput = document.getElementById('imageFiles');

	function onPostFormChange() {
		window.scrollTo(0, 0);
		if (body !== null) {
			body.classList.toggle('stop-scrolling');
			setPostFormState(true);
		}
	}

	function togglePostForm() {
		if (postFormState === false) {
			if (fileInput !== null) {
				fileInput.click();
			}
		} else {
			if (body !== null) {
				body.classList.toggle('stop-scrolling');
				setPostFormState(false);
			}
		}
	}

	function toggleMoreInfo() {
		setMoreInfo(!moreInfo);
	}

	function toggleMoreInfoMobile() {
		setMoreInfoMobile(!moreInfoMobile);
	}

	const dispatch = useDispatch<AppThunkDispatch>();

	const logout = (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		dispatch(logoutAsync());
	};

	function switchColorMode() {
		const bodyElements: HTMLElement | any = document.getElementsByClassName('body');

		Object.values(bodyElements).forEach((element: HTMLElement | any) => {
			element.classList.toggle('dark-mode');
		});
	}

	return (
		<>
			<header className="w-full h-20 fixed top-0 left-0 flex flex-row justify-between items-center py-4 px-4 md:px-16 border-b border-b-gray-300 bg-white z-50">
				<h1 className="text-4xl font-semibold">Instalike</h1>

				<nav>
					<button className="hidden md:inline-block mx-4">
						<Link to={'/feed'}>
							<i className="text-2xl text-blue-600 hover:bg-blue-200 py-1 px-2 text-center rounded fa-solid fa-house"></i>
						</Link>
					</button>
					<button className="hidden md:inline-block mx-4">
						<Link to={'/discover'}>
							<i className="text-2xl hover:bg-gray-200 py-1 px-2 text-center rounded fa-regular fa-compass"></i>
						</Link>
					</button>
					<button onClick={togglePostForm} className="hidden md:inline-block mx-4">
						<i className="text-2xl hover:bg-gray-200 py-1 px-2 text-center rounded fa-solid fa-plus"></i>
					</button>
					<button onClick={toggleMoreInfo} className="hidden md:inline-block mx-4 relative">
						<i className="text-2xl hover:bg-gray-200 py-1 px-2 text-center rounded fa-regular fa-circle-user">
							<div
								className={`bg-white border border-gray-200 rounded-md p-2 absolute right-0 mt-4 ${
									moreInfo ? '' : 'hidden'
								}`}
							>
								<Link
									onClick={() => {
										if (language == Language.FR) {
											setLanguage(Language.EN);
											i18n.changeLanguage(Language.EN);
										} else if (language == Language.EN) {
											setLanguage(Language.FR);
											i18n.changeLanguage(Language.FR);
										}
									}}
									to="#"
									className="font-sans font-semibold block text-sm my-1 p-1 rounded cursor-pointer hover:bg-gray-200 text-black"
								>
									{t('actions.changeLanguage')}
								</Link>
								<Link
									onClick={logout}
									to="#"
									className="font-sans font-semibold block text-sm my-1 p-1 rounded cursor-pointer hover:bg-red-200 text-red-500"
								>
									{t('actions.logout')}
								</Link>
							</div>
						</i>
					</button>
					<button onClick={switchColorMode} className="mx-4">
						<i className="text-2xl hover:bg-gray-200 py-1 px-2 text-center rounded fa-regular fa-moon"></i>
					</button>
				</nav>
			</header>

			<header className="md:hidden fixed bottom-0 left-0 w-screen h-16 border-t border-t-gray-200 bg-white z-50">
				<nav className="flex flex-row justify-evenly items-center my-2">
					<button className="md:hidden mx-4">
						<Link to={'/feed'}>
							<i className="text-2xl text-blue-600 hover:bg-blue-200 py-1 px-2 text-center rounded fa-solid fa-house"></i>
						</Link>
					</button>
					<button className="md:hidden mx-4">
						<Link to={'/discover'}>
							<i className="text-2xl hover:bg-gray-200 py-1 px-2 text-center rounded fa-regular fa-compass"></i>
						</Link>
					</button>
					<button onClick={togglePostForm} className="md:hidden mx-4">
						<i className="text-2xl hover:bg-gray-200 py-1 px-2 text-center rounded fa-solid fa-plus"></i>
					</button>
					<button onClick={toggleMoreInfoMobile} className="md:hidden mx-4 relative">
						<i className="text-2xl hover:bg-gray-200 py-1 px-2 text-center rounded fa-regular fa-circle-user">
							<div
								className={`bg-white border border-gray-200 rounded-md p-2 absolute bottom-0 mb-12 right-0 mt-4 ${
									moreInfoMobile ? '' : 'hidden'
								}`}
							>
								<Link
									onClick={() => {
										if (language == Language.FR) {
											setLanguage(Language.EN);
											i18n.changeLanguage(Language.EN);
										} else if (language == Language.EN) {
											setLanguage(Language.FR);
											i18n.changeLanguage(Language.FR);
										}
									}}
									to="#"
									className="font-sans font-semibold block text-sm my-1 p-1 rounded cursor-pointer hover:bg-gray-200 text-black"
								>
									{t('actions.changeLanguage')}
								</Link>
								<Link
									onClick={logout}
									to="#"
									className="font-sans font-semibold block text-sm my-1 p-1 rounded cursor-pointer hover:bg-red-200 text-red-500"
								>
									{t('actions.logout')}
								</Link>
							</div>
						</i>
					</button>
				</nav>
			</header>

			{postFormState == true ? (
				<PostForm togglePostForm={togglePostForm} showed={true} onPostFormChange={onPostFormChange} />
			) : (
				<PostForm togglePostForm={togglePostForm} showed={false} onPostFormChange={onPostFormChange} />
			)}
		</>
	);
}

export default Header;
