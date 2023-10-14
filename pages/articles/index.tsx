import dynamic from 'next/dynamic';
import Color from '../../src/components/utils/page.colors';
import colors from '../../src/content/articles/_colors.json';
import settings from '../../src/content/_settings.json';
import TitleArticles from './title.articles';
import DevToRecent from '../../src/components/sections/articles/recents.blogs';
import React from "react";

// Define the shape of a single medium article
interface MediumArticle {
	title: string;
	pubDate: string;
	link: string;
	author: string;
	thumbnail: string;
	categories: string[];
}

// Define the props for the RecentArticles component
interface RecentArticlesProps {
	mediumArticles: {
		feed: any; // Replace 'any' with the actual type for feed
		items: MediumArticle[];
	};
}
import { ComponentType } from 'react';

// RecentArticles component
const RecentArticles: ComponentType<RecentArticlesProps> = dynamic(
	() => import('../../src/components/sections/articles/recent.articles')
);
// Articles page component
const Articles: React.FC<{ mediumArticles: any; devToArticles: any }> = ({ mediumArticles, devToArticles }) => {
	return (
		<>
			{/* Title and meta tags */}
			<TitleArticles />
			{/* Page color settings */}
			<Color colors={colors} />
			{/* Display recent articles from Medium */}
			<RecentArticles mediumArticles={mediumArticles} />
			{/* Display recent articles from Dev.to */}
			<DevToRecent devToArticles={devToArticles} />
		</>
	);
};

// Server-side function to fetch data
export async function getServerSideProps({ res }: any) {
	// Set cache control headers
	res.setHeader('Cache-Control', 'public, s-maxage=600, stale-while-revalidate=59');

	// Fetch Medium articles
	const [mediumRSS] = await Promise.all([
		fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${settings.username.medium}`),
	]);

	// Fetch Dev.to articles
	const [devToArticles] = await Promise.all([
		fetch(`https://dev.to/api/articles?username=${settings.username.dev}&per_page=8`),
	]);
	let [devToData] = await Promise.all([devToArticles.json()]);

	let [mediumArticles] = await Promise.all([mediumRSS.json()]);

	return { props: { mediumArticles, devToArticles: devToData } };
}

export default Articles;
