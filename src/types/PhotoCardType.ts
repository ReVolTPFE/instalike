import { Instalike } from '@jmetterrothan/instalike';

export type PhotoCardType = {
	id: number;
	imgUrl: Instalike.Media[];
	liked: boolean;
	likesCount: number;
	commentsCount: number;
};
