import dynamic from "next/dynamic";

const Recent   = dynamic(import ('../../src/components/sections/articles/recent'));

import Color from '../../src/components/utils/page.colors'

import colors from '../../src/content/articles/_colors.json'
import settings from '../../src/content/_settings.json'
import TitleArticles from "./title.articles";

//this is the article page
export default function Articles({ mediumArticles }) {
	{/*this will return the article page content from medium using api req*/}
	return (
		<>
			<TitleArticles/>
			<Color colors={colors} />
			<Recent mediumArticles={mediumArticles}/>
		</>
	)
}


export async function getServerSideProps({ res }) {
	{/*This gets called on every request*/}

	res.setHeader(
		'Cache-Control',
		'public, s-maxage=600, stale-while-revalidate=59'
	)

	console.log(settings.username.medium)

	const [ mediumRSS ] = await Promise.all( [
		fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${settings.username.medium}`),
	] )
	
	let [ mediumArticles ] = await Promise.all( [
		mediumRSS.json(),
	] )

	return { props: { mediumArticles } }
}