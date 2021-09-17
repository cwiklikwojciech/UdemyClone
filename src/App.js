import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import AsideMenu from './components/AsideMaenu/AsideMenu';
import Content from './components/Content/Content';
import Header from './components/header';
import StoreProvider from './store/StoreProvider';

import './App.scss';
const App = () => (
	<StoreProvider>
		<Header />
		<Router>
			<div className="content-wrapper">
				<AsideMenu />
				<Content />
			</div>
		</Router>
	</StoreProvider>
);

export default App;
