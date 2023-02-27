import { Instalike } from '@jmetterrothan/instalike';

export type PostCardType = {
	id: number;
	description?: string;
	imgUrl: string;
	fullName: string;
	location?: string;
	commentStatus?: boolean;
	date?: string;
	liked: boolean;
	userId: number;
	likesCount: number;
	commentsCount: number;
	previewLikes: Instalike.Like[];
};
