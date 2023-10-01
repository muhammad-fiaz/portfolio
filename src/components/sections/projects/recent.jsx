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
import React from 'react';
import Section from '../../structure/section';
import Container from '../../structure/container';
import Image from 'next/image';
import Icon from '../../utils/icon';
import css from '../../../../assets/styles/scss/sections/projects/recent.module.scss';

export default function GitProjects({ repos, user }) {
	return (
		<Section classProp={css.section}>
			<Container classProp={css.container} spacing={'verticalXXXLrg'}>
				<h3>Recent Projects</h3>
				<section className={css.profile}>
					<Image
						className={css.profilePhoto}
						src={`${user[0]?.avatar_url}`}
						alt="Github Profile Photo"
						height={60}
						width={60}
						loading="eager"
					/>
					<span className={css.details}>
            <p>{user[0]?.name}</p>
            <a href={user[0]?.html_url} rel="noreferrer" target="_blank">
              {user[0]?.html_url} <Icon icon={['far', 'arrow-up-right-from-square']} />
            </a>
          </span>
				</section>
				<div className={css.projects}>
					{repos.map(({ name, description, topics, forks_count, html_url, language, watchers, homepage, pushed_at }, index) => {
						const date = new Date(pushed_at).toDateString();
						return (
							<article key={index} className={css.project}>
                <span className={css.header}>
                  <a href={html_url} rel="noreferrer" target="_blank">
                    {name} <Icon icon={['fad', 'arrow-up-right-from-square']} />
                  </a>
                  <p className={css.homepage}>{homepage}</p>
                </span>
								<span className={css.descriptionContainer}>
                  <p className={css.description}>{description}</p>
                </span>
								<span className={css.details}>
                  {language && (
					  <p>
						  <i className={`devicon-${language.toLowerCase()}-plain colored`} /> {language}
					  </p>
				  )}
									<p><Icon icon={['fad', 'star']} /> {watchers}</p>
                  <p><Icon icon={['fad', 'code-branch']} /> {forks_count}</p>
                  <p className={css.pushedAt}>{date}</p>
                </span>
								<span className={css.topicsContainer}>
                  {topics.map((e, index) => (
					  <span key={index} className={css.topics}>
                      <i className="devicon-github-plain"></i> {e}
                    </span>
				  ))}
                </span>
							</article>
						);
					})}
				</div>
				{/*
        <pre>{ JSON.stringify(user, undefined, 2) }</pre>
        <pre>{ JSON.stringify(repos, undefined, 2) }</pre>
        */}
			</Container>
		</Section>
	);
}
