import React from 'react';

import StoreProvider from './store/StoreProvider';

import './App.scss';

const App = () => (
	<StoreProvider>
		<h1>Test</h1>
	</StoreProvider>
);

export default App;
