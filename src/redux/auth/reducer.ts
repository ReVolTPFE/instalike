import { Reducer } from 'redux';

import { hasAccessToken } from '../../instalikeApi';
import { AuthAction, LOGIN, LOGOUT } from './actions';

type AuthState = {
	isAuth: boolean;
};

const initialState: AuthState = {
	isAuth: hasAccessToken(),
};

const authReducer: Reducer<AuthState, AuthAction> = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				isAuth: true,
			};

		case LOGOUT:
			return {
				...state,
				isAuth: false,
			};

		default:
			return state;
	}
};

export default authReducer;
