// Sections
const GitRecentProjects   = dynamic(import ('../../src/components/sections/projects/recent'));
const FeaturedProjects  = dynamic(import ( '../../src/components/sections/projects/featured'));
import dynamic from "next/dynamic";

import Color from '../../src/components/utils/page.colors'

import settings from '../../src/content/_settings.json'
import colors from '../../src/content/projects/_colors.json'
import TitleProjects from "./title.projects";

// this is the project page
export default function Projects({ user, repos }) {
	return (
		<>
			<TitleProjects/>
		<Color colors={colors} />
		<FeaturedProjects />
		<GitRecentProjects user={user} repos={repos} />
		</>
	)
}

export async function getServerSideProps({ res }) {
	{/*This gets called on every request*/}
	res.setHeader(
		'Cache-Control',
		'public, s-maxage=600, stale-while-revalidate=59'
	)

	const [ gitUserRes, gitReposRes] = await Promise.all( [
		fetch(`https://api.github.com/users/${settings.username.github}`),
		fetch(`https://api.github.com/users/${settings.username.github}/repos`),
	] )
	
	let [ user, repos] = await Promise.all( [
		gitUserRes.json(),
		gitReposRes.json(), 
	] )

	if (user.login) {
		user = [user].map( 
			({ login, name, avatar_url, html_url }) => ({ login, name, avatar_url, html_url })
		)
	}
	
	if (repos.length) {
		repos = repos.map( 
			({ name, fork, description, forks_count, html_url, language, watchers, default_branch, homepage, pushed_at, topics }) => {
				const timestamp = Math.floor(new Date(pushed_at) / 1000)
				return ({ name, fork, description, forks_count, html_url, language, watchers, default_branch, homepage, timestamp, topics, pushed_at })
			}
		)

		repos.sort( (a, b) => b.timestamp - a.timestamp )

		repos = repos.filter( (e, i) => {
			if ( i < 8 && ! e.topics.includes('github-config')) return e
			return false
		})
	}

	if (!repos || !user) { return { notFound: true,	} }

	return { props: { repos, user } }
}