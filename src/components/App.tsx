import { Route, Routes } from 'react-router';

import DiscoverView from '../views/DiscoverView';
import FeedView from '../views/FeedView';
import LoginView from '../views/LoginView';
import PostView from '../views/PostView';

function App() {
	return (
		<>
			<Routes>
				<Route path="/feed" element={<FeedView />} />
				<Route path="/discover" element={<DiscoverView />} />
				<Route path="/login" element={<LoginView />} />
				<Route path="/post/:id" element={<PostView />} />
				<Route path="/*" element={<FeedView />} />
			</Routes>
		</>
	);
}

export default App;
