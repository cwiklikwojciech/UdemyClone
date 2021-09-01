import React from 'react';

import Header from './components/header';
import StoreProvider from './store/StoreProvider';

import './App.scss';

const App = () => (
	<StoreProvider>
		<Header />
	</StoreProvider>
);

export default App;
