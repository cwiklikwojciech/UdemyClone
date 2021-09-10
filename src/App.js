import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import AsideMenu from './components/AsideMaenu/AsideMenu';
import Header from './components/header';
import StoreProvider from './store/StoreProvider';

import './App.scss';

const App = () => (
	<StoreProvider>
		<Header />
		<Router>
			<div className="content-wrapper">
				<AsideMenu />
			</div>
		</Router>
	</StoreProvider>
);

export default App;
