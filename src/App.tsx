import React from 'react';
import GlobalStyle from './globalStyle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer, Navbar } from './components';
import Home from './pages/HomePage/Home';
import ScrollToTop from './components/ScrollToTop';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<ScrollToTop />
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				{/* Add more pages and routing here similar to Home, 
				make sure to add same path to what you have entered in NavMenuItems file in Navbar.tsx*/}
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
