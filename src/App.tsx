import React from 'react';
import GlobalStyle from './globalStyle';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Navbar } from './components';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Switch />
		</Router>
	);
}

export default App;
