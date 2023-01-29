import { Link } from 'react-router-dom';

function Header() {
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
					<button className="hidden md:inline-block mx-4">
						<i className="text-2xl hover:bg-gray-200 py-1 px-2 text-center rounded fa-regular fa-circle-user"></i>
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
					<button className="md:hidden mx-4">
						<i className="text-2xl hover:bg-gray-200 py-1 px-2 text-center rounded fa-regular fa-circle-user"></i>
					</button>
				</nav>
			</header>
		</>
	);
}

export default Header;
