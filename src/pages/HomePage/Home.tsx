import React from 'react';
import { InfoSection } from '../../components';
import { homeObj } from './Data';

const Home = () => {
	return (
		<React.Fragment>
			<InfoSection {...homeObj} />
		</React.Fragment>
	);
};

export default Home;
