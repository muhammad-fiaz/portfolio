import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ThemeMode from '../utils/theme';

import settings from '../../content/_settings.json';
import content from '../../content/navbar.json';
import css from '../../../assets/styles/scss/structure/navbar.module.scss';
import Cookies from 'js-cookie';
import Image from 'next/image';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
	const router = useRouter();

	const [menuState, setMenuState] = useState(false);
	const email = Cookies.get('email');
	const password = Cookies.get('password');

	let signInContent;

	if (email && password) {
		signInContent = (
			<Link href="/settings">
				<a>
					<div className={css.circleImage}>
						<Image src="/img/user.jpg" width={34} height={34} alt="Profile Image" loading="eager" />
					</div>
				</a>
			</Link>
		);
	} else {
		signInContent = (
			<button className={css.signInButton}>
				<Link href="/signin">Sign In</Link>
			</button>
		);
	}

	useEffect(() => {
		setMenuState(false);
	}, []);

	const toggleMenu = () => {
		setMenuState((prevMenuState) => !prevMenuState);
	};

	return (
		<nav id="Navbar" className={css.container}>
			<ul className={css.menu}>
				<li className={css.menuHeader}>
					<Link className={css.logo} href="/">
						{settings.name}
					</Link>
					<button onClick={toggleMenu} className={css.mobileToggle} data-open={menuState}>
						<div>
							<span></span>
							<span></span>
						</div>
					</button>
				</li>
				<li data-open={menuState} className={css.menuContent}>
					<ul>
						{content.map(({ url, title }, index) => (
							<li key={index}>
								<Link href={url}>{title}</Link>
							</li>
						))}
						<li>
							<ThemeMode />
						</li>
						<li>{signInContent}</li>
					</ul>
				</li>
			</ul>

			<span onClick={toggleMenu} className={css.menuBlackout} data-open={menuState}></span>
		</nav>
	);
};

export default Navbar;
