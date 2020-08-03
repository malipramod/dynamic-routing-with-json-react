import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { menuItems } from './data/routeConfig';
import './App.css';
import Container from './components/Container';
import { Header } from './components/Header';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
			<Header/>
				{menuItems.map(menuItem => (
					<Route
						component={() => <Container content={menuItem.content} />}
						exact={menuItem.exact}
						key={menuItem.title}
						path={menuItem.path} />
				))}
			</div>
		</BrowserRouter>
	);
}

export default App;
