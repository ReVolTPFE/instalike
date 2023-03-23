import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate } from 'react-router';

import { loginAsync } from '../../redux/auth/thunks';

import useAppDispatch from '../../hooks/useAppDispatch';
import useIsAuth from '../../hooks/useIsAuth';

import '../../i18n';

function LoginForm() {
	const { t } = useTranslation();

	const dispatch = useAppDispatch();
	const isAuth = useIsAuth();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [redirect, setRedirect] = useState(false);
	const [error, setError] = useState('');

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		dispatch(loginAsync(email, password)).catch(() => setError(t('errors.login') || 'Login failed'));
	}

	useEffect(() => {
		if (isAuth) {
			setRedirect(true);
			setError('');
		}
	}, [isAuth]);

	return (
		<div>
			{redirect && <Navigate to="/feed" />}
			<form
				action=""
				method="post"
				className="flex flex-col text-center login-form"
				onSubmit={handleSubmit}
				data-cy="loginForm"
			>
				<input
					className="m-2 p-2 rounded bg-gray-200 focus:bg-white focus:border-blue-500"
					type="email"
					name="email"
					value={email}
					onChange={(event) => setEmail(event.target.value)}
					placeholder={t('form.email') || 'Email'}
					required
				/>
				<input
					className="m-2 p-2 rounded bg-gray-200 focus:bg-white active:border-blue-500"
					type="password"
					name="password"
					value={password}
					onChange={(event) => setPassword(event.target.value)}
					placeholder={t('form.password') || 'Password'}
					required
				/>

				<input
					className="m-2 p-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold cursor-pointer"
					type="submit"
					value={t('actions.login') || 'Login'}
				/>

				{error != '' && (
					<div className="m-2 p-4 border rounded border-red-500 text-red-500 text-center">{t(error)}</div>
				)}
			</form>
		</div>
	);
}

export default LoginForm;
