/*
 * Copyright (c) 2023 [Muhammad Fiaz](https://github.com/muhammad-fiaz/portfolio)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS.md OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React, { useState, useEffect } from 'react';
import colors from '../src/content/index/_colors.json';
import TitleIndex from './title.index';

// Import your components with dynamic import
import dynamic from 'next/dynamic';
import LoadingAnim from "../src/components/intro/loadinganim";
const Hero = dynamic(() => import('../src/components/sections/index/hero'));
const Looking = dynamic(() => import('../src/components/sections/index/looking'));
const About = dynamic(() => import('../src/components/sections/index/home'));
const Technical = dynamic(() => import('../src/components/sections/index/technical'));
const Career = dynamic(() => import('../src/components/sections/index/career'));
const FeaturedProjects = dynamic(() => import('../src/components/sections/projects/featured'));
const QnA = dynamic(() => import('../src/components/sections/index/qna'));
const Color = dynamic(() => import('../src/components/utils/page.colors'));

interface HomePageProps {
	spacing: string[]
}

export default function HomePage({spacing}: HomePageProps) {
	// Use a state variable to track whether components are loaded
	const [componentsLoaded, setComponentsLoaded] = useState(false);

	// Simulate a loading delay
	useEffect(() => {
		const timer = setTimeout(() => {
			setComponentsLoaded(true);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<TitleIndex />
			<Color colors={colors} />

			{/* Conditionally render components or loading message */}
			{/* These below line that commanded is Optional */}
			{/*	{componentsLoaded ? ( */}
				<>
					<Hero />
					<Looking />
					<About />
					<FeaturedProjects />
					<Technical />
					<Career />
					<QnA />
				</>
			{/*	) : (
	<LoadingAnim/>
			)} */}

		</>
	);
}
