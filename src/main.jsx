/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import globalEs from './translations/es/global.json';
import globalEn from './translations/en/global.json';

i18next.init({
	interpolation: { escapeValue: false },
    lng: "es",
	resources: {
		es: {
			global: globalEs,
		},
		en: {
			global: globalEn,
		},
	},
});

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<I18nextProvider i18n={i18next}>
			<App />
		</I18nextProvider>
	</BrowserRouter>
);
