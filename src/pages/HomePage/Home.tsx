import React from 'react';
import { InfoSection } from '../../components';
import { siteData, SiteDataInterface } from './Data';

const Home = () => {
	return (
		<React.Fragment>
			{siteData.map((sectionDetail: SiteDataInterface, index) => {
				return <InfoSection key={`section${index}`} {...sectionDetail} />;
			})}
		</React.Fragment>
	);
};

export default Home;
