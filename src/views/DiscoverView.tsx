import { useEffect } from 'react';

import instalikeApi from '../instalikeApi';

const DiscoverView = () => {
	useEffect(() => {
		instalikeApi.posts.fetch({ cursor: null });
		instalikeApi.users.me.fetch();
		instalikeApi.users.find(1).fetch();
	}, []);

	return <>Discover</>;
};

export default DiscoverView;
