import FeedBlock from '../components/layout/FeedBlock';
import Header from '../components/layout/Header';
import SuggestionBlock from '../components/layout/SuggestionBlock';

function FeedView() {
	return (
		<>
			<Header />

			<main className="w-full px-4 md:mx-auto md:w-2/3 lg:w-1/2 py-8">
				<SuggestionBlock />

				<FeedBlock />
			</main>
		</>
	);
}

export default FeedView;
