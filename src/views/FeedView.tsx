import { useDispatch } from 'react-redux';

import { logoutAsync } from '../redux/auth/thunks';

import FeedBlock from '../components/layout/FeedBlock';
import Header from '../components/layout/Header';
import SuggestionBlock from '../components/layout/SuggestionBlock';

function FeedView() {
	const dispatch = useDispatch();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch(logoutAsync());
	};

	return (
		<>
			<Header />
			<main className="w-full px-4 md:mx-auto md:w-2/3 lg:w-1/2 py-8">
				<form onSubmit={handleSubmit} action="" method="post">
					<input type="submit" value="Logout" />
				</form>
				<SuggestionBlock />

				<FeedBlock />
			</main>
		</>
	);
}

export default FeedView;
