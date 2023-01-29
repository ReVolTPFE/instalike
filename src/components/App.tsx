import { Route, Routes } from 'react-router';

import DiscoverView from '../views/DiscoverView';
import FeedView from '../views/FeedView';

function App() {
	return (
		<>
			<Routes>
				<Route path="/feed" element={<FeedView />} />
				<Route path="/discover" element={<DiscoverView />} />
				<Route path="/*" element={<FeedView />} />
			</Routes>
		</>
	);
}

export default App;
