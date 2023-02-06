import { Navigate, Outlet } from 'react-router';

import useAppSelector from '../hooks/useAppSelector';
import { RootState } from '../redux/store';

const selectIsAuth = (state: RootState) => state.auth.isAuth;

const useIsAuth = () => {
	return useAppSelector(selectIsAuth);
};

const AuthGuard = () => {
	const isAuth = useIsAuth();

	if (!isAuth) {
		return <Navigate to="/login" />;
	}
	return <Outlet />;
};

export default AuthGuard;
