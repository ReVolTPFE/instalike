import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { logoutAsync } from '../../redux/auth/thunks';

function Header() {
	const [moreInfo, setMoreInfo] = useState(false);
	const [moreInfoMobile, setMoreInfoMobile] = useState(false);

	function toggleMoreInfo() {
		setMoreInfo(!moreInfo);
	}

	function toggleMoreInfoMobile() {
		setMoreInfoMobile(!moreInfoMobile);
	}

	const dispatch = useDispatch();

	const logout = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch(logoutAsync());
	};

	return (
		<>
			<header className="w-full h-20 fixed top-0 left-0 flex flex-row justify-between items-center py-4 px-4 md:px-16 border-b border-b-gray-300 bg-white z-10">
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
					<button className="hidden md:inline-block mx-4">
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
									onClick={logout}
									to="#"
									className="font-sans font-semibold block text-sm my-1 p-1 rounded cursor-pointer hover:bg-red-200 text-red-500"
								>
									Logout
								</Link>
							</div>
						</i>
					</button>
					<button className="mx-4">
						<i className="text-2xl hover:bg-gray-200 py-1 px-2 text-center rounded fa-regular fa-moon"></i>
					</button>
				</nav>
			</header>

			<header className="md:hidden fixed bottom-0 left-0 w-screen h-16 border-t border-t-gray-200 bg-white z-10">
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
					<button className="md:hidden mx-4">
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
									onClick={logout}
									to="#"
									className="font-sans font-semibold block text-sm my-1 p-1 rounded cursor-pointer hover:bg-red-200 text-red-500"
								>
									Logout
								</Link>
							</div>
						</i>
					</button>
				</nav>
			</header>
		</>
	);
}

export default Header;
