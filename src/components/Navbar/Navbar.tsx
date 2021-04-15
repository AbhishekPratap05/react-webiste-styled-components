import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyle';
import {
	MobileIcon,
	Nav,
	NavbarContainer,
	NavIcon,
	NavItem,
	NavLinks,
	NavLogo,
	NavMenu,
	NavItemBtn,
	NavBtnLink
} from './Navbar.elements';

const Navbar = () => {
	const [ click, setClick ] = useState(false);
	const [ button, setButton ] = useState(true);

	interface NavMenuItemsInterface {
		to: string;
		text: string;
		btn?: boolean;
	}

	const NavMenuItems: NavMenuItemsInterface[] = [
		{
			to: '/',
			text: 'Home'
		},
		{
			to: '/services',
			text: 'Services'
		},
		{
			to: '/products',
			text: 'Products'
		},
		{
			to: 'sign-up',
			text: 'SIGN UP',
			btn: true
		}
	];

	const handleClick = () => {
		setClick(!click);
	};

	const showButton = () => {
		window.innerWidth <= 960 ? setButton(false) : setButton(true);
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener('resize', showButton);
	return (
		<IconContext.Provider value={{ color: '#fff' }}>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">
						<NavIcon />
						BRAND
					</NavLogo>
					<MobileIcon onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</MobileIcon>
					<NavMenu clickValue={click} onClick={handleClick}>
						{NavMenuItems.map((menuItem: NavMenuItemsInterface, index: number) => {
							return !menuItem.btn ? (
								<NavItem key={index}>
									<NavLinks to={menuItem.to}>{menuItem.text}</NavLinks>
								</NavItem>
							) : (
								<NavItemBtn key={index}>
									<NavBtnLink to={menuItem.to}>
										<Button primary fontBig={!button}>
											{menuItem.text}
										</Button>
									</NavBtnLink>
								</NavItemBtn>
							);
						})}
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default Navbar;
