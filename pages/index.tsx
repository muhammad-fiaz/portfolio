import React, { useState, useEffect } from 'react';
import colors from '../src/content/index/_colors.json';
import TitleIndex from './title.index';

// Import your components with dynamic import
import dynamic from 'next/dynamic';
import LoadingAnim from "../src/components/intro/loadinganim";
import TimeLine from "../src/components/sections/index/timeline";
const Hero = dynamic(() => import('../src/components/sections/index/hero'));
const Looking = dynamic(() => import('../src/components/sections/index/looking'));
const About = dynamic(() => import('../src/components/sections/index/home'));
const Technical = dynamic(() => import('../src/components/sections/index/technical'));
const Career = dynamic(() => import('../src/components/sections/index/optional/career'));
const FeaturedProjects = dynamic(() => import('../src/components/sections/projects/featured'));
const QnA = dynamic(() => import('../src/components/sections/index/qna'));
const Color = dynamic(() => import('../src/components/utils/page.colors'));
import settings from '../src/content/_settings.json';
import GithubGraphSection from "../src/components/sections/index/github.graph";

interface HomePageProps {
	spacing: string[];
}

export default function HomePage({ spacing }: HomePageProps) {
	// Use a state variable to track whether components are loaded
	const [componentsLoaded, setComponentsLoaded] = useState(false);

	// Simulate a loading delay
	useEffect(() => {
		const timer = setTimeout(() => {
			setComponentsLoaded(true);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	const renderContent = () => (
		<div>
			<Hero />
			<Looking />
			<About />
			<GithubGraphSection/>

			<FeaturedProjects />
			<Technical />
			{/*	<TimeLine/> -> Still In Development*/}
			<Career />
			<QnA />
		</div>
	);

	return (
		<div>
			<TitleIndex />
			<Color colors={colors} />

			{/* Conditionally render components or loading message */}
			{settings.splashscreen && !componentsLoaded ? (
				<LoadingAnim />
			) : (
				renderContent()
			)}
		</div>
	);
}
