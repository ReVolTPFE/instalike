import { AxiosError } from 'axios';
import { useEffect } from 'react';

import { logoutAsync } from '../redux/auth/thunks';

import instalikeApi from '../instalikeApi';
import useAppDispatch from './useAppDispatch';

const useAuthInterceptors = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		const resId = instalikeApi.driver.interceptors.response.use(
			(response) => response,
			(e) => {
				if (e instanceof AxiosError) {
					if (e.response?.status === 401) {
						dispatch(logoutAsync());
					}
				}

				return Promise.reject(e);
			}
		);

		return () => {
			instalikeApi.driver.interceptors.response.eject(resId);
		};
	}, [dispatch]);
};

export default useAuthInterceptors;
