import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Language from './enums/Language';
import './i18n';
import instalikeApi from './instalikeApi';

function App() {
	const { t, i18n } = useTranslation();

	useEffect(() => {
		instalikeApi.auth.login({ email: 'arnaud.steiner@etu.unistra.fr', password: 'DWEB2023' }).then(({ data }) => {
			console.log(data.accessToken);
		});
	}, []);

	return (
		<div className="App">
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
			<p>{t('actions.follow')}</p>
			<button
				onClick={() => {
					i18n.changeLanguage(Language.FR);
				}}
			>
				Langue FR
			</button>
			<button
				onClick={() => {
					i18n.changeLanguage(Language.EN);
				}}
			>
				Langue EN
			</button>
		</div>
	);
}

export default App;
