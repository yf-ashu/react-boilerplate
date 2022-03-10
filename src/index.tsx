import { store } from './store';
import App from '@client/App';
import Layout from '@client/Layout';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(faQuestion, fab);
const rootElement = document.getElementById('root');
ReactDOM.render(
	<StrictMode>
		<Provider store={store}>
			<Layout />
		</Provider>
	</StrictMode>,
	rootElement,
);
