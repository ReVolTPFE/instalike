import { Reducer } from 'redux';

import { AuthAction, LOGIN, LOGOUT } from './actions';

type AuthState = {
	isAuth: boolean;
};

const initialState: AuthState = {
	isAuth: false,
};

const authReducer: Reducer<AuthState, AuthAction> = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return { ...state, isAuth: true };
		case LOGOUT:
			return { ...state, isAuth: false };
		default:
			return state;
	}
};

export default authReducer;
