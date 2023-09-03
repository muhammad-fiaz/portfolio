import {useEffect, useState} from 'react';

import Container from '../structure/container';
import Icon from '../utils/icon';

import css from '../../../assets/styles/scss/structure/footer.module.scss';

import content from '../../content/section/footer.json';
import settings from '../../content/_settings.json';

interface GitHubInfo {
	stars: number | null;
	forks: number | null;
}

export default function Footer(): JSX.Element {
	const [gitHubInfo, setGitHubInfo] = useState<GitHubInfo>({
		stars: null,
		forks: null,
	});

	useEffect(() => {
		fetch(settings.portfolio.repo_api)
			.then(response => response.json())
			.then(json => {
				const { stargazers_count, forks_count } = json;
				setGitHubInfo({
					stars: stargazers_count,
					forks: forks_count,
				});
			})
			.catch(e => console.error(e));
	}, []);

	return (
		<footer className={css.container}>
			<Container spacing={['verticalXXLrg', 'bottomLrg']}>
				<section className={css.sections}>
					<ul className={css.thanks}>
						<li>
							<h4>Websites</h4>
						</li>
						{content.Websites.map(({ person, link, note }, index) => {
							return (
								<li key={index}>
									<a href={link} rel="noreferrer" target="_blank">
										{person} <Icon icon={['fad', 'arrow-up-right-from-square']} />
									</a>
									<p>{note}</p>
								</li>
							);
						})}
					</ul>
					<ul className={css.links}>
						<li>
							<h4>Links</h4>
						</li>
						{content.links.map(({ person, link, note }, index) => {
							return (
								<li key={index}>
									<a href={link} rel="noreferrer" target="_blank">
										{person} <Icon icon={['fad', 'arrow-up-right-from-square']} />
									</a>
									<p>{note}</p>
								</li>
							);
						})}
					</ul>
					<ul className={css.social}>
						<li>
							<h4>Social</h4>
						</li>
						<li className={css.socialList}>
							{content.social.map(({ url, icon }, index) => {
								return (
									<a key={index} href={url} rel="noreferrer" target="_blank">
										<Icon icon={['fab', icon] as any} />
									</a>
								);
							})}
						</li>

					</ul>
				</section>
				<section className={css.github}>
					<a href={settings.portfolio.repo_html} rel="noreferrer" target="_blank">
						<h5>{settings.portfolio.fork_this}</h5>
						<ul>
							<li>
								<p>
									<Icon icon={['fad', 'code-branch']} /> Forks: {gitHubInfo.forks}
								</p>
							</li>
							<li>
								<p>
									<Icon icon={['fad', 'star']} /> Stars: {gitHubInfo.stars}
								</p>
							</li>
						</ul>
					</a>
				</section>
			</Container>
			<canvas id="gradient-canvas" className={''} data-transition-in=""></canvas>
		</footer>
	);
}
