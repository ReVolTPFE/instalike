import { Route, Routes } from 'react-router';

import FeedView from '../views/FeedView';

function App() {
	return (
		<>
			<Routes>
				<Route path="/feed" element={<FeedView />} />
				<Route path="/*" element={<FeedView />} />
			</Routes>
		</>
	);
}

export default App;
