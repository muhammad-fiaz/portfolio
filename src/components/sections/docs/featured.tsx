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
import Section from '../../structure/section';
import Container from '../../structure/container';

import Image from 'next/image'
import SectionTitle from '../../blocks/section.title'

import Icon from '../../utils/icon'

import css from '../../../../assets/styles/scss/sections/articles/recent.module.scss'
import docs from '../../../content/docs/featured.json'
import React from "react";

export default function Recent({ }) {


    return (
        <Section classProp="borderBottom">
            {/* @ts-ignore */}
            <Container spacing={'verticalXXXXLrg'}>
                <SectionTitle
                    title="Featured Docs"
                    preTitle="Documentation"
                    subTitle="featured documentation of projects"
                />
                <section className={css.projects}>
                    {
                        docs.map( ({ title, pubDate, link, author, thumbnail, categories }, index) => {
                            const date = new Date(pubDate).toDateString()
                            return (
                                <>
                                    <article key={index} className={css.project}>
								<span className={css.featuredImage}>
                                    <Image src={thumbnail} alt="Documentation thumbnail" height={400} width={600} loading="eager" />
								</span>
                                        <span className={css.header}>
									<a href={link} rel="noreferrer" target="_blank">{title} <Icon icon={[ 'fad', 'arrow-up-right-from-square' ]} /></a>
								</span>
                                        <span className={css.descriptionContainer}>
								</span>
                                        <span className={css.details}>
									<p>By {author}</p>
									<p className={css.pushedAt}>{date}</p>
								</span>
                                        <span className={css.topicsContainer}>
									{
                                        categories.map( (e, index) => {
                                            return ( <span key={index} className={css.topics}><Icon icon={[ 'fab', 'medium' ]} /> {e}</span> )
                                        })
                                    }
								</span>
                                    </article>
                                </>
                            )
                        })
                    }
                </section>
            </Container>
        </Section>
    )
}