import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// Your existing imports
import { Analytics } from '@vercel/analytics/react';
import { LazyMotion, domAnimation } from "framer-motion"
import SetGridGap from '../src/components/utils/set.grid'
import Layout from '../src/components/layout/layout'
import "../node_modules/the-new-css-reset/css/reset.css"
import "@fontsource/fira-code/400.css"
import "@fontsource/fira-code/600.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/800.css"
import '../node_modules/devicon/devicon.min.css'
import '../assets/styles/css/variables.css'
import '../assets/styles/css/global.css'
// Google Analytics
import * as gtag from '../src/components/analytics/gtag';
// splash screen
import LoadingScreen from "../src/components/intro/splash";
import "../assets/styles/css/splash.css";
import DevelopmentNotice from "../src/components/dev/status";

// NProgress configuration
NProgress.configure({ showSpinner: false });

// NProgress start on route change
Router.events.on('routeChangeStart', () => {
	NProgress.start();
});

// NProgress stop on route change
Router.events.on('routeChangeComplete', () => {
	NProgress.done();
});

// NProgress stop on route change error
Router.events.on('routeChangeError', () => {
	NProgress.done();
});

export default function MyApp({ Component, pageProps }) {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const handleRouteChange = (url) => {
			gtag.pageview(url);
		};

		Router.events.on('routeChangeComplete', handleRouteChange);

		return () => {
			Router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 4000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{isLoading ? (
				<LoadingScreen />
			) : (
				<LazyMotion features={domAnimation}>
					<Layout>
						<DevelopmentNotice />

						<Component {...pageProps} />
						<Analytics />

						<SetGridGap />
					</Layout>
				</LazyMotion>

				)}
		</>
	);
}
