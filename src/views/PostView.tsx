import { useParams } from 'react-router';

function PostView() {
	const params = useParams();

	return <>Post {params.id}</>;
}

export default PostView;
