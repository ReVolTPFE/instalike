import { PhotoCardType } from '../../types/PhotoCardType';

function PhotoCard({ imgUrl }: PhotoCardType) {
	return (
		<>
			{/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
			<img className="rounded-xl aspect-square w-full h-full object-cover" src={imgUrl} alt="Post photo" />
		</>
	);
}

export default PhotoCard;
