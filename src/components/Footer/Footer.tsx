import React from 'react';
import { Button } from '../../globalStyle';
import { FooterLinksItems } from './Footer.elements';
import {
	FooterContainer,
	FooterLink,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkTile,
	FooterSubHeading,
	FooterSubscription,
	FooterSubText,
	Form,
	FormInput
} from './Footer.elements';

interface FooterNavigationInterface {
	title: string;
	links: FooterLinkInterface[];
}

interface FooterLinkInterface {
	to: string;
	text: string;
}

const footerLinks: FooterNavigationInterface[] = [
	{
		title: 'How it works',
		links: [
			{
				to: '/',
				text: 'Testimonials'
			},
			{
				to: '/',
				text: 'Careers'
			},
			{
				to: '/',
				text: 'Investors'
			},
			{
				to: '/',
				text: 'Terms of Services'
			}
		]
	},
	{
		title: 'Contact Us',
		links: [
			{
				to: '/',
				text: 'Testimonials'
			},
			{
				to: '/',
				text: 'Careers'
			},
			{
				to: '/',
				text: 'Investors'
			},
			{
				to: '/',
				text: 'Terms of Services'
			}
		]
	},
	{
		title: 'Videos',
		links: [
			{
				to: '/',
				text: 'Testimonials'
			},
			{
				to: '/',
				text: 'Careers'
			},
			{
				to: '/',
				text: 'Investors'
			},
			{
				to: '/',
				text: 'Terms of Services'
			}
		]
	},
	{
		title: 'Social Media',
		links: [
			{
				to: '/',
				text: 'Testimonials'
			},
			{
				to: '/',
				text: 'Careers'
			},
			{
				to: '/',
				text: 'Investors'
			},
			{
				to: '/',
				text: 'Terms of Services'
			}
		]
	}
];

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
			<FooterLinksContainer>
				<FooterLinksWrapper>
					{footerLinks.map((footerLink: FooterNavigationInterface, index: number) => {
						return (
							<FooterLinksItems key={`footerLink${index}`}>
								<FooterLinkTile>{footerLink.title}</FooterLinkTile>
								{footerLink.links.map((link: FooterLinkInterface, index: number) => {
									return (
										<React.Fragment key={`link${index}`}>
											<FooterLink to={link.to}>{link.text}</FooterLink>
										</React.Fragment>
									);
								})}
							</FooterLinksItems>
						);
					})}
				</FooterLinksWrapper>
			</FooterLinksContainer>
		</FooterContainer>
	);
};

export default Footer;
