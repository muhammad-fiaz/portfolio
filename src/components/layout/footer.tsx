/*
 * Copyright (c) 2023 [Muhammad Fiaz](https://github.com/muhammad-fiaz/)
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
