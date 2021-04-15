import React from 'react';
import { Button } from '../../globalStyle';
import {
	FooterContainer,
	FooterSubHeading,
	FooterSubscription,
	FooterSubText,
	Form,
	FormInput
} from './Footer.elements';

const Footer = () => {
	return (
		<FooterContainer>
			<FooterSubscription>
				<FooterSubHeading>Get membership to receive the latest news and trends</FooterSubHeading>
				<FooterSubText>You can unsubscribe at any time.</FooterSubText>
				<Form>
					<FormInput name="email" type="email" placeholder="yor email" />
					<Button fontBig>Subscribe</Button>
				</Form>
			</FooterSubscription>
		</FooterContainer>
	);
};

export default Footer;
