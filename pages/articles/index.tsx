import React from 'react';
import { GetServerSideProps } from 'next';
import Recent from '../../src/components/sections/articles/recent';
import Color from '../../src/components/utils/page.colors';
import colors from '../../src/content/articles/_colors.json';
import settings from '../../src/content/_settings.json';
import TitleArticles from './title.articles';

// this is the article page
interface ArticleProps {
	mediumArticles: any;
}

export default function Articles({ mediumArticles }: ArticleProps) {
	{/* This will return the article page content from Medium using the API req */}
	return (
		<>
			<TitleArticles />
			<Color colors={colors} />
			<Recent mediumArticles={mediumArticles} />
		</>
	);
}

export const getServerSideProps: GetServerSideProps<ArticleProps> = async ({ res }) => {
	{/* This gets called on every request */}

	res.setHeader(
		'Cache-Control',
		'public, s-maxage=600, stale-while-revalidate=59'
	);

	console.log(settings.username.medium);

	const [mediumRSS] = await Promise.all([
		fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${settings.username.medium}`),
	]);

	let [mediumArticles] = await Promise.all([
		mediumRSS.json(),
	]);

	return { props: { mediumArticles } };
};
