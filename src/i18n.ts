import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import commonEn from './assets/locales/en/common.json';
import commonFr from './assets/locales/fr/common.json';
import Language from './enums/Language';

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		ns: 'common',
		defaultNS: 'common',
		fallbackLng: Language.EN,
		supportedLngs: Object.values(Language), // ['en', 'fr']
		resources: {
			[Language.EN]: {
				common: commonEn,
			},
			[Language.FR]: {
				common: commonFr,
			},
		},
		interpolation: {
			escapeValue: false,
		},
		detection: {
			order: ['queryString', 'localStorage'],
			caches: ['localStorage'],
			lookupQuerystring: 'lang',
		},
	});
