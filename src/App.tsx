import React from 'react';
import GlobalStyle from './globalStyle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer, Navbar } from './components';
import Home from './pages/HomePage/Home';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
