import { useTranslation } from 'react-i18next';

import '../../i18n';

function LoginForm() {
	const { t, i18n } = useTranslation();

	return (
		<div>
			<form action="" method="post" className="flex flex-col text-center">
				<input
					className="m-2 p-2 rounded bg-gray-200 focus:bg-white focus:border-blue-500"
					type="text"
					name="email"
					id="email"
					placeholder={t('form.email') || 'Email'}
				/>
				<input
					className="m-2 p-2 rounded bg-gray-200 focus:bg-white active:border-blue-500"
					type="password"
					name="password"
					id="password"
					placeholder={t('form.password') || 'Password'}
				/>
				<input
					className="m-2 p-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold cursor-pointer"
					type="submit"
					value={t('actions.login') || 'Login'}
				/>
			</form>
		</div>
	);
}

export default LoginForm;
