import { useEffect, useState } from 'react'; // Import React hooks for side effects
import { useRouter } from 'next/router'; // Import Next.js router for navigation
import Link from 'next/link'; // Import Link component for client-side navigation
import ThemeMode from '../utils/theme'; // Import a custom utility for theme mode

import settings from '../../content/_settings.json'; // Import site settings from a JSON file
import content from '../../content/navbar.json'; // Import navigation content from a JSON file
import css from '../../../assets/styles/scss/structure/navbar.module.scss'; // Import SCSS styles for the navbar
import Cookies from 'js-cookie'; // Import a library for handling cookies
import Image from 'next/image'; // Import Next.js Image component for optimized images

// Declare the 'sticky' property on the 'window' object to avoid TypeScript errors
declare global {
	interface Window {
		sticky: {
			nav: HTMLElement | null;
			at: number;
		};
	}
}

// Define interfaces for route and scroll events
interface RouteEvents {
	addEventListeners: () => void;
	removeEventListeners: () => void;
	closeMenu: () => void;
}

interface ScrollEvents {
	addEventListeners: () => void;
	removeEventListeners: () => void;
	getPosition: (e: HTMLElement | null, top: boolean) => number;
	maybeHideNav: () => void;
}

// Define the functional component 'Navbar'
export default function Navbar() {
	// Initialize router and state variables
	const router = useRouter();
	const [menuState, menuToggle] = useState<boolean | undefined>();

	// Retrieve email and password cookies
	const email = Cookies.get('email');
	const password = Cookies.get('password');

	let signInContent; // Declare a variable to hold sign-in content

	// Determine the sign-in content based on cookie existence
	if (email && password) {
		// If email and password cookies exist, show the user's profile image
		signInContent = (

					<div className={css.circleImage}>
						<Image src="/img/user.jpg" width={34} height={34} alt="Profile Image" loading="eager" />
					</div>

		);
	} else {
		// If email and password cookies do not exist, show the "Sign In" button
		signInContent = (
			<button className={css.signInButton}>
				<Link href="/signin">Sign In</Link>
			</button>
		);
	}

	// useEffect: Set the initial menu state to false
	useEffect(() => {
		menuToggle(false);
	}, []);

	// useEffect: Define and manage route change events
	useEffect(() => {
		// Define a class for route change events
		class RouteEventsImpl implements RouteEvents {
			constructor() {
				console.log(
					'%c☰  Navigation Router Events Loaded',
					'background: #060708; color: #fff; padding: .125rem .75rem; border-radius: 5px; font-weight: 900; '
				);
				this.addEventListeners();
			}

			closeMenu() {
				// Close the menu by setting 'menuState' to false
				menuToggle(false);
			}

			addEventListeners() {
				// Add an event listener for 'routeChangeComplete'
				router.events.on('routeChangeComplete', this.closeMenu);
			}

			removeEventListeners() {
				// Remove the event listener for 'routeChangeComplete' when the component unmounts
				router.events.off('routeChangeComplete', this.closeMenu);
			}
		}

		// Create an instance of 'RouteEventsImpl' and set up event listeners
		const routeEvents = new RouteEventsImpl();

		// Clean up event listeners when the component unmounts
		return () => {
			routeEvents.removeEventListeners();
		};
	}, [router.events]);

	// useEffect: Define and manage scroll events
	useEffect(() => {
		// Define a class for scroll events
		class ScrollEventsImpl implements ScrollEvents {
			lastY: number;

			constructor() {
				console.log(
					'%c▼  Navigation Scroll Events Loaded',
					'background: #060708; color: #fff; padding: .125rem .75rem; border-radius: 5px; font-weight: 900; '
				);

				// Initialize 'lastY' to the current scroll position
				this.lastY = window.scrollY;

				// Initialize 'window.sticky.nav' and 'window.sticky.at' based on the selector
				window.sticky = {
					nav: document.querySelector(`nav`),
					at: 0, // Initialize 'at' property to zero (or set it to the appropriate value)
				};

				// Add scroll event listeners
				this.addEventListeners();
			}

			addEventListeners() {
				if (window.sticky.nav) {
					// Add event listeners for 'DOMContentLoaded' and 'scroll'
					window.addEventListener('DOMContentLoaded', this.maybeHideNav, false);
					document.addEventListener('scroll', this.maybeHideNav, false);
				}
			}

			removeEventListeners() {
				if (window.sticky.nav) {
					// Remove event listeners for 'DOMContentLoaded' and 'scroll' when the component unmounts
					window.removeEventListener('DOMContentLoaded', this.maybeHideNav, false);
					document.removeEventListener('scroll', this.maybeHideNav, false);
				}
			}

			getPosition(e: HTMLElement | null, top: boolean) {
				let offset = 0;

				if (e) {
					if (top) {
						// Calculate the position offset from the top
						offset = e.getBoundingClientRect().top + document.documentElement.scrollTop - window.sticky.at;
					} else {
						// Calculate the position offset from the bottom
						offset = e.getBoundingClientRect().bottom + document.documentElement.scrollTop - window.sticky.at;
					}
				}

				return offset;
			}

			maybeHideNav() {
				/**
				 * If scrolling down, else if scrolling up
				 *
				 * Add or remove the 'hidden' class from the navigation menu
				 */
				const nC = window.sticky.nav!.classList;
				const hiddenAt = window.innerHeight / 2;

				if (window.scrollY > this.lastY && window.scrollY > hiddenAt && !nC.contains(css.hidden)) {
					// Add 'hidden' class when scrolling down
					nC.add(css.hidden);
				} else if (window.scrollY < this.lastY && nC.contains(css.hidden)) {
					// Remove 'hidden' class when scrolling up
					nC.remove(css.hidden);
				}

				/**
				 * At the end of every scroll event, update the previous position
				 */
				this.lastY = window.scrollY;
			}
		}

		// Create an instance of 'ScrollEventsImpl' and set up scroll event listeners
		const scrollEvents = new ScrollEventsImpl();

		// Clean up scroll event listeners when the component unmounts
		return () => {
			scrollEvents.removeEventListeners();
		};
	}, []);

	// Function to toggle the menu state
	const toggleMenu = () => {
		let bool = !menuState;
		menuToggle(bool);
	};

	// JSX: Render the navigation menu
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
						{content.map(({ url, title }, index) => {
							return (
								<li key={index}>
									<Link href={url}>{title}</Link>
								</li>
							);
						})}
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
}
